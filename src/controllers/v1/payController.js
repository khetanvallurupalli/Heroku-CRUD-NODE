/**
 * 
 * @Controller
 * 
 */

const express = require('express'),
    router = express.Router(),
    payService = require('../../service/payService'),
    contextPath = '/api/v1.0',
    resource = '/pay';

router.post(contextPath.concat(resource), (req, res) => {
    payService.insertPay(req, res);
});

router.get(contextPath.concat(resource), (req, res) => {
    payService.getPay(req, res);
});

router.delete(contextPath.concat(resource, '/:id'), (req, res) => {
    payService.deletePay(req, res);
});

router.put(contextPath.concat(resource, '/:id'), (req, res) => {
    payService.updatePay(req, res);
});

module.exports = router;