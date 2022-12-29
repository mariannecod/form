//Máscara Telefone
const input_tel = document.getElementById('phone');

input_tel.addEventListener('Input', function(e) {MascaraTelefone(e.target.value)});
input_tel.addEventListener('Change', function(e) {MascaraTelefone(e.target.value)});

function MascaraTelefone(valor) {

    valor = valor.replace(/\D/g, "");
    valor = valor.replace(/^(\d{2})(\d)/g, "($1) $2");
    valor = valor.replace(/(\d)(\d{4})$/, "$1-$2");
    
    input_tel.value = valor;
};
//Máscara data
const input_date = document.getElementById('data');

input_date.addEventListener('input', function() {MascaraData(this)});

function MascaraData(val) {
  var pass = val.value;
  var expr = /[0123456789]/;
  

  for (i = 0; i < pass.length; i++) {
  
    var lchar = val.value.charAt(i);
    var nchar = val.value.charAt(i + 1);

    if (i == 0) 
    {
      if ((lchar.search(expr) != 0) || (lchar > 3)) 
      {
        val.value = "";
      }

    } else if (i == 1) {

      if (lchar.search(expr) != 0) {
      
        var tst1 = val.value.substring(0, (i));
        val.value = tst1;
        continue;
      }

      if ((nchar != '/') && (nchar != '')) {
        var tst1 = val.value.substring(0, (i) + 1);

        if (nchar.search(expr) != 0)
          var tst2 = val.value.substring(i + 2, pass.length);
        else
          var tst2 = val.value.substring(i + 1, pass.length);

        val.value = tst1 + '/' + tst2;
      }

    } else if (i == 4) {

      if (lchar.search(expr) != 0) {
        var tst1 = val.value.substring(0, (i));
        val.value = tst1;
        continue;
      }

      if ((nchar != '/') && (nchar != '')) {
        var tst1 = val.value.substring(0, (i) + 1);

        if (nchar.search(expr) != 0)
          var tst2 = val.value.substring(i + 2, pass.length);
        else
          var tst2 = val.value.substring(i + 1, pass.length);

        val.value = tst1 + '/' + tst2;
      }
    }

    if (i >= 6) {
      if (lchar.search(expr) != 0) {
        var tst1 = val.value.substring(0, (i));
        val.value = tst1;
      }
    }
  }

  if (pass.length > 10)
    val.value = val.value.substring(0, 10);
  return true;
}

//Força Seleção do Checkbox da hora
const checkbox_dia = document.getElementById('checkbox-dia');
const checkbox_tarde = document.getElementById('checkbox-tarde');
const checkbox_noite = document.getElementById('checkbox-noite');
const btn_submit = document.getElementById('enviar');

function FChecked() {
 if (checkbox_dia.checked || checkbox_tarde.checked || checkbox_noite.checked)
 {
 btn_submit.disabled = false;
 }
 else
 {
 btn_submit.disabled = true;
 }
};

checkbox_dia.addEventListener('change', function() {FChecked()});
checkbox_tarde.addEventListener('change', function() {FChecked()});
checkbox_noite.addEventListener('change', function() {FChecked()});