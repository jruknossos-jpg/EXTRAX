// resourceGenerator.js

class ResourceGenerator {
    constructor(subscriptionTier, hashBoosters) {
        this.subscriptionTier = subscriptionTier;
        this.hashBoosters = hashBoosters;
    }

    getMiningSpeed() {
        const baseMiningSpeed = 100; // Base mining speed
        let tierMultiplier = this.getTierMultiplier();
        return baseMiningSpeed * tierMultiplier * this.hashBoosters;
    }

    getTierMultiplier() {
        switch (this.subscriptionTier) {
            case 'basic':
                return 1.0;
            case 'premium':
                return 1.5;
            case 'gold':
                return 2.0;
            default:
                return 1.0;
        }
    }

    generateResource(type) {
        const miningSpeed = this.getMiningSpeed();
        let resource;
        switch (type) {
            case 'aether':
                resource = this.generateAether(miningSpeed);
                break;
            case 'secrets':
                resource = this.generateSecrets(miningSpeed);
                break;
            case 'wood':
                resource = this.generateWood(miningSpeed);
                break;
            case 'fire':
                resource = this.generateFire(miningSpeed);
                break;
            case 'water':
                resource = this.generateWater(miningSpeed);
                break;
            default:
                throw new Error('Unknown resource type');
        }
        return resource;
    }

    generateAether(miningSpeed) {
        return miningSpeed * 0.8; // Custom logic for aether
    }

    generateSecrets(miningSpeed) {
        return miningSpeed * 0.5; // Custom logic for secrets
    }

    generateWood(miningSpeed) {
        return miningSpeed * 0.6; // Custom logic for wood
    }

    generateFire(miningSpeed) {
        return miningSpeed * 0.9; // Custom logic for fire
    }

    generateWater(miningSpeed) {
        return miningSpeed * 1.0; // Custom logic for water
    }
}

module.exports = ResourceGenerator;