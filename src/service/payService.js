/**
 * 
 * @Service
 * 
 */

exports.insertPay = (req, res) => {
    db.query('INSERT into PAYMENTS(payer_id, payer_name, payee_id, payee_name, amount, date) values ($1, $2, $3, $4, $5, $6) ',
        [req.body.payer_id, req.body.payer_name, req.body.payee_id, req.body.payee_name, req.body.amount, new Date()], (err, doc) => {
            if (err) {
                console.log('err insert', err);
                return res.status(500).send({ message: 'Error while insert database.' });
            }
            res.send({ message: 'Inserted successfully' })
        })
}

exports.getPay = (req, res) => {
    db.query('SELECT * FROM PAYMENTS', (err, doc) => {
        if (err) {
            console.log('err list', err);
            return res.status(500).send({ message: 'Error while return data from database.' });
        }
        console.log('List: ', doc.rows);
        res.send({ data: doc.rows })
    })
}

exports.deletePay = (req, res) => {
    console.log('req', req.params);
    db.query('DELETE FROM PAYMENTS where payment_id = $1', [req.params.id], (err, doc) => {
        if (err) {
            console.log('err delete', err);
            return res.status(500).send({ message: 'Error while return data from database.' });
        }
        console.log('Delete: ', doc);
        res.send({ message: `${doc.rowCount} rows deleted.` })
    })
}

exports.updatePay = (req, res) => {

    var query = updatePaymentById(req.params.id, req.body);
    var colValues = Object.keys(req.body).map(function (key) {
        return req.body[key];
    });

    db.query(query, colValues, (err, doc) => {
        if (err) {
            console.log('err update', err);
            return res.status(500).send({ message: 'Error while return data from database.' });
        }
        console.log('Update: ', doc);
        res.send({ message: `${doc.rowCount} rows updated.` })
    })
}

function updatePaymentById(id, cols) {
    var query = ['UPDATE payments'];
    query.push('SET');
    var set = [];
    Object.keys(cols).forEach(function (key, i) {
        set.push(key + ' = ($' + (i + 1) + ')');
    });
    query.push(set.join(', '));
    query.push('WHERE payment_id = ' + id);
    return query.join(' ');
}