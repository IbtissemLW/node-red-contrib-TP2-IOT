module.exports = function(RED) {
    function IbtissemNode(config) {
        RED.nodes.createNode(this, config);
        var node = this;
        node.on('input', function(msg) {
            msg.payload = "Ibtissem";
            node.send(msg);
        });
    }
    RED.nodes.registerType("ibtissem", IbtissemNode);
}
