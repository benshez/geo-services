<?php



use Doctrine\ORM\Mapping as ORM;

/**
 * GeoserviceMigrationVersions
 *
 * @ORM\Table(name="geoservice_migration_versions")
 * @ORM\Entity
 */
class GeoserviceMigrationVersions
{
    /**
     * @var string
     *
     * @ORM\Column(name="version", type="string", length=255)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    private $version;


    /**
     * Get version
     *
     * @return string
     */
    public function getVersion()
    {
        return $this->version;
    }
}

