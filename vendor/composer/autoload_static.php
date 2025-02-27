<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit146939698fda865f6b7e42bf09dc5db6
{
    public static $prefixLengthsPsr4 = array (
        'Y' => 
        array (
            'YouTube\\' => 8,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'YouTube\\' => 
        array (
            0 => __DIR__ . '/..' . '/athlon1600/youtube-downloader/src',
        ),
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit146939698fda865f6b7e42bf09dc5db6::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit146939698fda865f6b7e42bf09dc5db6::$prefixDirsPsr4;

        }, null, ClassLoader::class);
    }
}
