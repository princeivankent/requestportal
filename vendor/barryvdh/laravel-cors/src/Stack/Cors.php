<?php

namespace Barryvdh\Cors\Stack;

use Symfony\Component\HttpKernel\HttpKernelInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

/**
 * Based on asm89/stack-cors
 */
class Cors implements HttpKernelInterface
{
    /**
     * @var \Symfony\Component\HttpKernel\HttpKernelInterface
     */
    private $app;

    /**
     * @var \Asm89\Stack\CorsService
     */
    private $cors;

    private $defaultOptions = array(
        'allowedHeaders'      => array(),
        'allowedMethods'      => array(),
        'allowedOrigins'      => array(),
        'exposedHeaders'      => false,
        'maxAge'              => false,
        'supportsCredentials' => false,
    );

    public function __construct(HttpKernelInterface $app, array $options = array())
    {
        $this->app  = $app;
        $this->cors = new CorsService(array_merge($this->defaultOptions, $options));

    }

    public function handle(Request $request, $type = HttpKernelInterface::MASTER_REQUEST, $catch = true)
    {
        if ( ! $this->cors->isCorsRequest($request)) {
            return $this->app->handle($request, $type, $catch);
        }

        if ($this->cors->isPreflightRequest($request)) {
            return $this->cors->handlePreflightRequest($request);
        }

        if ( ! $this->cors->isActualRequestAllowed($request)) {
            return new Response('Not allowed.', 403);
        }

        $response = $this->app->handle($request, $type, $catch);

        return $this->cors->addActualRequestHeaders($response, $request);
    }
}
