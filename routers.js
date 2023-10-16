const express = require('express')
const router = express.Router()
const userControllers = require('./controllers/userControllers')
const accountControllers = require('./controllers/accountControllers')
const transactionControllers = require('./controllers/transactionControllers')

router.get('/', (req,res) => {
    return res.json({
        message: "Hello World!!!"
    })
})

router.post('/users', userControllers.registerUser)
router.get('/users', userControllers.getUsers)
router.get('/users/:userId', userControllers.getUserById)
router.put('/users/:userId/update-profile', userControllers.updateProfile)
router.put('/users/:userId/update-password', userControllers.updatePassword)
router.delete('/users/:userId', userControllers. deleteUserById)
router.post('/accounts', accountControllers.addAccounts)
router.get('/accounts', accountControllers.getAccounts)
router.get('/accounts/:accountId', accountControllers.getAccountById);
router.put('/accounts/:accountId', accountControllers.updateAccountById);
router.delete('/accounts/:accountId', accountControllers. deleteAccountById);
router.post('/transactions', transactionControllers.addTransaction)
router.get('/transactions', transactionControllers.getTransactions)
router.get('/transactions/:transactionId', transactionControllers.getTransactionById); 
router.put('/transactions/:transactionId', transactionControllers.updateTransactionById);
router.delete('/transactions/:transactionId', transactionControllers.deleteTransactionById); 


module.exports = router