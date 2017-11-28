
function billingFunction(){
    if (document.getElementById("same").checked) {
        copy("shippingName", "billingName");
        copy("shippingZip", "billingZip");
    }
}

function copy(sourceId, destinationId) {
    var sourceInputNode = document.getElementById(sourceId);
    var destinationInputNode = document.getElementById(destinationId);
    destinationInputNode.value = sourceInputNode.value;
}