var demoWorkspace = Blockly.inject('frame-for-blockly',{
  toolbox: document.getElementById('toolbox'),
  trashcan: true,
  zoom:{
    controls: true,
    wheel: true,
    startScale: 1.0,
    maxScale: 3,
    minScale: 0.3,
    scaleSpeed: 1.2
  }
});

function genCode() {
  var code = Blockly.JavaScript.workspaceToCode(demoWorkspace);
  document.getElementById('code').innerText = code;
  localStorage.setItem('code', code);
}

function genXml() {
  var xml = Blockly.Xml.workspaceToDom(demoWorkspace);
  var xml_text = Blockly.Xml.domToPrettyText(xml);
  // var xml_text = Blockly.Xml.domToText(xml);
  localStorage.setItem('xml_text', xml_text);
}

(function loadLocalStorage() {
  var xml_text = localStorage.getItem('xml_text');
  var dom = Blockly.Xml.textToDom(xml_text);
  Blockly.Xml.domToWorkspace(dom, demoWorkspace);


  var code = localStorage.getItem('code');
  console.log(code)
  document.getElementById('code').innerText = code;
})()
