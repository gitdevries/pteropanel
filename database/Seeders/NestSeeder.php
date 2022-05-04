<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Pterodactyl\Exceptions\Model\DataValidationException;
use Pterodactyl\Services\Nests\NestCreationService;
use Pterodactyl\Contracts\Repository\NestRepositoryInterface;

class NestSeeder extends Seeder
{
    /**
     * @var \Pterodactyl\Services\Nests\NestCreationService
     */
    private $creationService;

    /**
     * @var \Pterodactyl\Contracts\Repository\NestRepositoryInterface
     */
    private $repository;

    private $nests = [
        'Leaguesandbox' => [
            'name' => 'League Sandbox',
            'description' => 'League of Legends sanbox server.'
        ],
        'Minecraft' => [
            'name' => 'Minecraft',
            'description' => 'Minecraft - the classic game from Mojang. With support for Vanilla MC, Spigot, and many others!',
        ],
        'Rust' => [
            'name' => 'Rust',
            'description' => 'Rust - A game where you must fight to survive.',
        ],
        'Source Engine' => [
            'name' => 'Source Engine',
            'description' => 'Includes support for most Source Dedicated Server games.',
        ],
        'Steamcmd Servers' => [
            'name' => 'Steam Servers',
            'description' => 'Steam cmd supported dedicated servers.'
        ],
        'Teamspeak3' => [
            'name' => 'Teamspeak 3',
            'description' => 'Teamspeak bots and services.'
        ],
        'Teeworlds' => [
            'name' => 'Teeworlds',
            'description' => 'Teeworlds server.'
        ],
        'Terraria' => [
            'name' => 'Terraria',
            'description' => 'Terraria vanilla server and modloaders.'
        ],
        'Twitch' => [
            'name' => 'Twitch',
            'description' => 'Twitch bots to improve your amazing stream.'
        ],
        'Voice Servers' => [
            'name' => 'Voice Servers',
            'description' => 'Voice servers such as Mumble and Teamspeak 3.',
        ],
    ];

    /**
     * NestSeeder constructor.
     */
    public function __construct(
        NestCreationService     $creationService,
        NestRepositoryInterface $repository
    )
    {
        $this->creationService = $creationService;
        $this->repository = $repository;
    }

    /**
     * Run the seeder to add missing nests to the Panel.
     *
     * @throws DataValidationException
     */
    public function run()
    {
        $items = $this->repository->findWhere([
            'author' => 'support@pterodactyl.io',
        ])->keyBy('name')->toArray();

        foreach ($this->nests as $nest => $data) {
            $this->createNest($data, array_get($items, $nest));
        }
    }

    /**
     * @throws DataValidationException
     */
    private function createNest(array $data, array $nest = null)
    {
        if (is_null($nest)) {
            $this->creationService->handle($data, 'support@pterodactyl.io');
        }
    }
}
