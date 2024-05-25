import { WebpayPlus } from 'transbank-sdk'; // ES6 Modules
import { Options, IntegrationApiKeys, Environment, IntegrationCommerceCodes } from 'transbank-sdk'; // ES6 Modules

// Versión 3.x (5.x?) del SDK
export const tx = new WebpayPlus.Transaction(
    new Options(
        IntegrationCommerceCodes.WEBPAY_PLUS,
        IntegrationApiKeys.WEBPAY,
        Environment.Integration
    )
);