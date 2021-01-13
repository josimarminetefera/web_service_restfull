'use strict';
console.log("msgController.js INICIANDO");

const mongoose = require('mongoose');

const Message = mongoose.model('Messages');

exports.list_all_messages = function (req, res) {
    console.log("msgController.js list_all_messages");
    Message.find({}, function (err, msg) {
        if (err)
            res.send(err);
        res.json(msg);
    });
};

exports.create_a_message = function (req, res) {
    console.log("msgController.js create_a_message");
    var new_msg = new Message(req.body);
    new_msg.save(function (err, msg) {
        if (err)
            res.send(err);
        res.json(msg);
    });
};

exports.read_a_message = function (req, res) {
    console.log("msgController.js read_a_message");
    Message.findById(req.params.msgId, function (err, msg) {
        if (err)
            res.send(err);
        res.json(msg);
    });
};

exports.update_a_message = function (req, res) {
    console.log("msgController.js update_a_message");
    Message.findOneAndUpdate({ _id: req.params.msgId }, req.body, { new: true }, function (err, msg) {
        if (err)
            res.send(err);
        res.json(msg);
    });
};

exports.delete_a_message = function (req, res) {
    console.log("msgController.js delete_a_message");
    Message.remove({
        _id: req.params.msgId
    }, function (err, msg) {
        if (err)
            res.send(err);
        res.json({ message: 'Message successfully deleted' });
    });
};