<?php
/**
 * BaseGet File Doc Comment
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

namespace GeoService\Bundles\Roles\Actions;

use GeoService\Modules\Config\Config;
use GeoService\Bundles\Roles\Actions\Action;
use GeoService\Bundles\Roles\Validation\Validation;
use DoctrineModule\Paginator\Adapter\Selectable as SelectableAdapter;
use Doctrine\ORM\Tools\Pagination\Paginator as ORMPaginator;
use Doctrine\Common\Collections\Criteria;

class Get extends Action
{
    const REFERENCE = 'roles';
    const REFERENCE_OBJECT = 'name';
    const KEY = 'id';
    
    /**
     * Authenticate Roles
     *
     * @param array  $role Role.
     *
     * @return User
     */
    public function onGet(array $role)
    {
        $offset = isset($role['offset']) ? $role['offset'] : 0;
        $limit = isset($role['limit']) ? $role['limit'] : 20;
        $key = isset($role[self::KEY]) ? $role[self::KEY] : null;
        
        // $role = $this->onBaseActionGet()->get(
        //     $this->getReference(self::REFERENCE),
        //     isset($role[self::KEY]) ?
        //     [self::KEY => $role[self::KEY]] :
        //     null
        // );
        $criteria = null;
        
        if (isset($role[self::KEY])) {
            $criteria = Criteria::create()
            ->where(Criteria::expr()->eq(self::KEY, $key));
        }
        
        $adapter = new SelectableAdapter(
            $this->getEntityManager()->getRepository(
                $this->getReference(self::REFERENCE)
            ),
            $criteria
        );

        // if ($role && !is_array($role)) {
        //     $role = $this->roleToArray($role);
        // }
        // $page = 1;
        // $max = 2;
        

        //$paginator->setCurrentPageNumber($page);
        //$paginator->setItemCountPerPage($max);
        //$adapter->criteria($criteria);

        $paginator = new ORMPaginator($adapter->getItems($offset, $limit));
        
        $paginator = $paginator->getQuery();

        return ($paginator);
    }
}
