<?php
/*
 * /path/to/migrations/directory/Version20121011141021.php
 */
namespace GeoServiceMigrations;

use Doctrine\DBAL\Migrations\AbstractMigration;
use Doctrine\DBAL\Schema\Schema;
use Symfony\Component\DependencyInjection\ContainerAwareInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;

class Version20121011141021 extends AbstractMigration implements ContainerAwareInterface
{
	private $container;
	
	public function setContainer(ContainerInterface $container = null)
	{
		$this->container = $container;
	}

	public function up(Schema $schema)
	{
			$table = $schema->createTable('more_more_test');
			$table->addColumn('id', 'integer', array('unsigned' => true));
			$table->addColumn('title', 'string', array('length' => 128));
			$table->addColumn('content', 'text');
			$table->setPrimaryKey(array('id'));
	}

	public function down(Schema $schema)
	{
			$schema->dropTable('more_more_test');
	}
}
