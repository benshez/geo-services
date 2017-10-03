<?php



namespace GeoService\Modules\Base\Actions;

use Interop\Container\ContainerInterface;
use GeoService\Modules\Base\Actions\BaseAction;
use GeoService\Modules\Base\Actions\BaseSave;

class BaseDelete extends BaseAction
{

    /**
     * Base Delete Action
     *
     * @param $entity Entity Class.
     *
     * @return void
     */
    public function delete($entity)
    {
        $manager = $this->getEntityManager();
        $manager->remove($entity);
        $manager->flush($entity);
    }
}
