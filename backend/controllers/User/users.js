const User = require('../../models/User/users');

const getAllUsers = async (req, res) => {
    try {
        const user = await User.findAll();
        if (!user) {
            return res.status(401).json({ message: 'User tidak tersedia' });
        }

        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getAllUsers
}