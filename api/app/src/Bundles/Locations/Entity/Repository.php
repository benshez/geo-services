<?php
/**
 * Repository File Doc Comment
 *
 * PHP Version 7.0.10
 *
 * @category  BaseSave
 * @package   GeoService
 * @author    Ben van Heerden <benshez1@gmail.com>
 * @copyright 2017-2018 GeoService
 * @license   http://www.gnu.org/copyleft/gpl.html GNU General Public License
 * @link      https://github.com/benshez/geo-services
 */

namespace GeoService\Bundles\Locations\Entity;

use Doctrine\ORM\Query;
use Doctrine\ORM\Query\Expr\Join;
use Doctrine\ORM\EntityRepository;
use Doctrine\ORM\NoResultException;
use GeoService\Modules\Base\Entity\BaseEntity;
use GeoService\Bundles\Contact\Entity\Contact;
use GeoService\Bundles\Entities\Entity\Entities;
use GeoService\Bundles\Locations\Entity\Locations;
use GeoService\Bundles\Industries\Entity\Industries;

class Repository extends BaseEntity
{
    /**
     * Find One By
     *
     * @param array   $criteria Criteria.
     *
     * @param array   $orderBy  Class.
     *
     * @param integer $limit    Class.
     *
     * @param integer $offset   Class.
     *
     * @return One
     */
    public function findBy(
        array $criteria,
        array $orderBy = null,
        $limit = null,
        $offset = null
    ) {

        $query = $this->getQuery($criteria['industry'], $orderBy);

        try {
            $locations = $query->getResult(Query::HYDRATE_ARRAY);
            return $locations;
        } catch (NoResultException $e) {
            return false;
        }
    }

    /**
     * Generate Query
     *
     * @param string $criteria Criteria.
     *
     * @param array  $orderBy  Class.
     *
     * @return Query
     */
    private function getQuery(string $criteria, array $orderBy = null)
    {
        $qb = $this->_em->createQueryBuilder();

        $qb->select($this->getSelectStatement())
        ->from(Entities::class, 'entities')
        ->innerJoin(
            Contact::class,
            'contact',
            Join::WITH,
            '(contact.entity = entities.id)'
        )
        ->innerJoin(
            Locations::class,
            'locations',
            Join::WITH,
            '(locations.user = entities.id)'
        )
        ->innerJoin(
            Industries::class,
            'industries',
            Join::WITH,
            '(entities.industry = industries.id)'
        )
        ->where('industries.id = :identifier')
        ->andWhere('contact.enabled = 1')
        ->andWhere('entities.expiresAt >= :expires')
        ->setParameter('identifier', $criteria)
        ->setParameter('expires', $this->getFormattedDate());

        $query = $qb->getQuery();
        
        return $query;
    }

    /**
     * Generate Formatted Date
     *
     * @return string
     */
    private function getFormattedDate()
    {
        $date = new \DateTime();
        $formatted = $date->format('Y-m-d') . '\'';
        return $formatted;
    }

    /**
     * Generate Select Ststement
     *
     * @return string
     */
    private function getSelectStatement()
    {
        $statement = 'locations.latitude, locations.longitude, ';
        $statement .= 'contact.username, contact.phone, ';
        $statement .= 'contact.logo, contact.email, contact.website, ';
        $statement .= 'contact.facebook, contact.twitter';

        return $statement;
    }
}
