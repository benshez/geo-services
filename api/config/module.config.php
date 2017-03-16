<?php 
return [
    'settings' => [
        'displayErrorDetails' => true,
        // Doctrine
        'doctrine' => [
            'meta' => [
                'entity_path' => [
                    'app/src/Entity'
                ],
                'auto_generate_proxies' => true,
                'proxy_dir' =>  __DIR__.'/../cache/proxies',
                'cache' => null,
            ],
            'connection' => [
                'driver'   => 'pdo_mysql',
                'host'     => 'localhost',
                'dbname'   => 'geo_service',
                'user'     => 'root',
                'password' => 'Und3rTh3D@rk',
            ],
            'authentication' => [
                'orm_default' => [
                'object_manager' => 'Doctrine\ORM\EntityManager',
                'identity_class' => 'GeoService\Users\Users',
                'identity_property' => 'email',
                'credential_property' => 'password',
            ],
        ],
        ],
        // monolog settings
        'logger' => [
            'name' => 'app',
            'path' => __DIR__ . '/../log/app.log',
        ],
        'allowed_origin' => 'http://localhost:5555'
    ],
    'abstract_factories' => [
        StorageCacheAbstractServiceFactory::class,
    ],
    'caches' => [
        'mycache' => [
            'adapter' => Redis::class,
            'options' => [
                'server' => [
                    'host' => 'localhost',
                ],
                'password' => 'foobared',
            ],
        ],
    ]
];