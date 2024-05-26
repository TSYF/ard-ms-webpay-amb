import { envs } from '@/config/env';
import { ErrorBody } from '@/types/ErrorBody';
import { CommonResponseBody } from '@/types/CommonResponseBody';
import express from 'express';
import { matches } from '@/utils';
import { Sale, saleMatcher } from '../types/Sale';
import { RequestBody } from '../utils';
import { tx } from '@/config/tbk';
import { SalePayload } from '@/types/SalePayload';
import Transaction from 'transbank-sdk/dist/es5/transbank/webpay/webpay_plus/transaction';
const router = express.Router();

//* Show
router.get("/:token", async (req, res) => {
    const { token } = req.params;

    try {
        const status = await tx.status(token)

        const CODE = 200;
        return res.status(CODE).send(status);
    } catch (error: unknown) {
        console.error(error)
        const CODE = 500;
        
        res.status(CODE)
    }
        // const output = response.detailOutput[0];
        // if (output.responseCode === 0) {
        //   // La transacción se ha realizado correctamente
        // }
})

//* Store
router.post(
    "/",
    async (req, res) => {
        const salePayload: SalePayload & RequestBody = req.body;
        const response = await tx.create(
            salePayload.sale.buyOrder,
            salePayload.sessionId,
            salePayload.sale.service.price,
            salePayload.returnUrl
        );
        // tokenws
        res.status(200).send(response);
    }
)

module.exports = router;
export default router;

// if (!matches(sale, serviceMatcher)) {
//     const CODE = 422;
    
//     const error: ErrorBody = {
//         private: "Error inesperado en llamado fetch en Store",
//         public: new CommonResponseBody(
//             false,
//             CODE,
//             {
//                 message: "La forma del cuerpo no coincide con la forma de Servicio"
//             }
//         )
//     }
//     console.log(error.private);
//     console.error(error.errorObject)
//     res.status(CODE).send(error.public);
//     return;
// }

// new Promise((_, __) => {}).then(response => (console.log(response), response.json()))
// .then(service => {
//     if (matches(service, serviceMatcher)) {
//         const response = new CommonResponseBody(
//             true,
//             201,
//             service
//         )
//         res.status(201).send(response);
//     } else {
//         const CODE = 500;
//         const error: ErrorBody = {
//             private: "El serviceo retornado no pasa el typecheck de array en Store",
//             public: new CommonResponseBody(
//                 false,
//                 CODE,
//                 {
//                     message: "¡Ha ocurrido un problema inesperado!"
//                 }
//             )
//         }
//         console.log(service);
//         console.log(error.private);
//         res.status(CODE).send(error.public);
//     }
// }).catch(err => {
//     const CODE = 500;

//     const error: ErrorBody = {
//         private: "Error inesperado en llamado fetch en Store",
//         public: new CommonResponseBody(
//             false,
//             CODE,
//             {
//                 message: "¡Ha ocurrido un problema inesperado!"
//             }
//         ),
//         errorObject: err
//     }
//     console.log(error.private);
//     console.error(error.errorObject)
//     res.status(CODE).send(error.public);
// })