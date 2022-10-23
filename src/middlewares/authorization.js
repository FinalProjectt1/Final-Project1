const postgres = require('../../config/db_connection');

exports.authorization = async (req, res, next) => {
    try {
        const authenticatedUserId = parseInt(res.dataUser.id);
        const id = parseInt(req.params.id);

        const data = await postgres.query(`SELECT * FROM reflections WHERE owner_id=${authenticatedUserId} AND id=${id} `);

        if (data.rowCount > 0) {
            next();
        } else {
            return res.status(403).json({ message: 'You dont have data with this reflection id' })
        }
    } catch (error) {
        return res.status(500).json(error);
    }

}