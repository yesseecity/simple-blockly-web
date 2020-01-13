Blockly.Blocks['my_block'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("自訂方塊");
    this.appendDummyInput()
        .appendField("下拉選單")
        .appendField(new Blockly.FieldDropdown([["option","OPTIONNAME"], ["option","OPTIONNAME"], ["option","OPTIONNAME"]]), "d1");
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("由方塊輸入值");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['my_block'] = function(block) {
  var dropdown_d1 = block.getFieldValue('d1');
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};
