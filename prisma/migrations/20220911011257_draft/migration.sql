-- AlterTable
ALTER TABLE `Player` MODIFY `teamId` INTEGER NOT NULL DEFAULT 1;

-- CreateTable
CREATE TABLE `Draft` (
    `id` VARCHAR(191) NOT NULL,
    `roundCount` INTEGER NOT NULL,
    `playerCount` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Pick` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `roundId` INTEGER NOT NULL,
    `pickId` INTEGER NOT NULL,
    `draftId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Pick_draftId_key`(`draftId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Pick` ADD CONSTRAINT `Pick_draftId_fkey` FOREIGN KEY (`draftId`) REFERENCES `Draft`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
