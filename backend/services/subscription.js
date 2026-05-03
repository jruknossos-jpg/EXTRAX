// subscription.js

const stripe = require('stripe')('your-stripe-secret-key');

class SubscriptionService {
    constructor() {
        this.tiers = {
            weekly: { price: 9.99, speedBoost: 1.5, hashMultiplier: 2, premiumFeatures: false },
            monthly: { price: 29.99, speedBoost: 1.8, hashMultiplier: 3, premiumFeatures: true },
            yearly: { price: 299.99, speedBoost: 2, hashMultiplier: 5, premiumFeatures: true }
        };
    }

    async createCheckoutSession(subscriptionTier) {
        const tier = this.tiers[subscriptionTier];
        if (!tier) throw new Error('Invalid subscription tier');

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [{
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: `${subscriptionTier.charAt(0).toUpperCase() + subscriptionTier.slice(1)} Subscription`,
                    },
                    unit_amount: tier.price * 100, 
                    recurring: {
                        interval: subscriptionTier === 'yearly' ? 'year' : 'month',
                    },
                },
                quantity: 1,
            }],
            mode: 'payment',
            success_url: 'https://yourdomain.com/success',
            cancel_url: 'https://yourdomain.com/cancel',
        });

        return session.url;
    }

    async handleWebhook(req) {
        // Handle Stripe webhook events for successful payments, etc.
        const event = req.body;
        switch (event.type) {
            case 'payment_intent.succeeded':
                const paymentIntent = event.data.object;
                // Fulfill the purchase... 
                break;
            // Handle other events as needed
            default:
                console.warn(`Unhandled event type ${event.type}`);
        }
    }
}

module.exports = new SubscriptionService();