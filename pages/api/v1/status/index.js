function status(req, res) {
    res.status(200).json({
        status: "Deu certo"
    });
}

export default status;