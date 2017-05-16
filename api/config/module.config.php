<?php 
return [
    'settings' => [
        'determineRouteBeforeAppMiddleware' => true,
        'displayErrorDetails' => true,
        'doctrine' => [
            'meta' => [
                'entity_path' => [
                    'app/src/Entity'
                ],
                'auto_generate_proxies' => true,
                'proxy_dir'             =>  __DIR__.'/../cache/proxies',
                'cache'                 => null,
            ],
            'connection' => [
                'driver'   => 'pdo_mysql',
                'host'     => 'localhost',
                'dbname'   => 'geo_service',
                'user'     => 'root',
                'port'     => '3306',
                'password' => 'Und3rTh3D@rk',
            ],
            'authentication' => [
                'orm_default' => [
                'object_manager'      => 'Doctrine\ORM\EntityManager',
                'identity_class'      => 'GeoService\Users\Users',
                'identity_property'   => 'email',
                'credential_property' => 'password',
            ],
            'service_manager' => [
                'factories' => [
                    \Zend\Authentication\AuthenticationService::class 
                        => GeoService\Users\Service\Factory\AuthenticationServiceFactory::class,
                ],
            ]
          ],
        ],
        'logger' => [
            'name' => 'app',
            'path' => __DIR__ . '/../log/app.log',
        ],
        'allowed_origin' => 'http://localhost:5555',
        'caching' => [
            'abstract_factories' => [
                Zend\Cache\Service\StorageCacheAbstractServiceFactory::class,
            ],
            'caches' => [
              'GeoSevice' => [
                  'adapter' => [
                      'name'     => 'memcache',
                      'options'  => [
                          'servers' => [
                              [
                                  'localhost', 
                                  11211
                              ]
                          ],
                          'namespace' => 'GeoSevice',
                          'ttl'       => 5 * 60,
                      ]
                  ],
              ]
            ]
        ],
        'cors' => [
          'origin'          => 'http://localhost:5555',
          'methods'         => ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
          'headers.allow'   => [],
          'headers.expose'  => [],
          'credentials'     => true,
          'cache'           => 0,
          'error'           => null,
          'logger'          => null
        ]
    ]
];