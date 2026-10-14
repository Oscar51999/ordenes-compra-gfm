/* Órdenes de Compra GFM — núcleo compartido (formulario, panel y autorización).
   Catálogos, cálculo fiscal, importe con letra y formato PDF FO-GF-02. */
(function (global) {
  'use strict';

  var CAT = {"cc": ["101 - CAMPAMENTO TRABAJADORES LA RIBERA", "102 - PROPIO DEPAS SANTA CRUZ LA RIBERA", "103 - REMODELACIONES Y ADECUACIONES OFICINAS", "104 - PRIVADO DEPAS VISTA CORTES", "105 - CAPUFE MODERNIZACION CASETA QRO", "106 - PRIVADO DEPARTAMENTOS CIAN", "107 - PRIVADO CASA BELLAVISTA", "108 - PRIVADO CIAN ALBAÑILERIA", "109 - CPMA MONTAGE MOV TIERRA", "110 - PROYECTOS ANTERIORES (HISTORICO) FIRME", "111 - BECK-OMNI INFRAESTRUCTURA PLUVIAL FIRME", "112 - CASA MURICA", "113 - CASA ANHELO", "114 - TALLER CJR OFICINAS LA CURVA", "115 - ACTIVOS FIJOS RENTA-REMODELACION", "116 - CPMA DUNNA", "117 - ADMINISTRACION DE PROYECTOS MENORES", "118 - ACADEMIA DE PROTECCION FEDERAL ECATEPEC", "119 - ICIFED CENTRO COMUNITARIO ARBOLEDAS", "120 - TERRACERIAS FS EVENT SPACE", "121 - MOVIMIENTO DE TIERRAS OASIS", "122 - JN NUEVA CREACION - ICIFED", "123 - CISTERNA SCA", "124 - REHABILITACIÓN OBRA PLUVIAL - REA NL", "125 - MOVIMIENTO DE TIERRAS MONTAGE CTTO 2", "126 - REMODELACION OFICINAS ASP", "127 - CONSTRUCCION ESTRUCTURA ENTREPIEDRAS", "128 - TRABAJOS REPARACIONES B HERMANOS", "129 - CONSTRUCCION PUENTE LA PRESA", "130 - CONSTRUCCION CUARTEL", "131 - ALBAÑILERÍAS EXTERIORES NAYAMA COPACHISA", "132 - PAVIMENTACION CALLES COZUMEL", "134 - MANTENIMIENTO CLINICAS IMSS BIENESTAR", "135 - REMODELACIÓN OFICINAS GAP TIJUANA", "136 - CASAS ENTREPIEDRAS", "137 - MODERNIZACIÓN P.I.V. \"PRECUOTA\", KM. 90+819", "140 - CONSERVACIÓN DE PAVIMENTOS EN PISTA", "141 - TERRACERIAS JARDIN RANCH", "143 - DISTRIBUIDOR VIAL TLAPACOTA", "144 - DEMOLICIÓN Y PLATAFORMAS AEROPUERTO TIJUANA", "145 - REHABILITACIÓN PLANETARIO", "A01 - GASTOS ADMINISTRATIVOS FIRME", "ADM - AREA ADMINISTRATIVA", "CI1 - COSTOS INDIRECTOS NUEVO LEON", "CI2 - COSTOS INDIRECTOS NAYARIT", "CI3 - COSTOS INDIRECTOS LA RIBERA", "CI4 - COSTOS INDIRECTOS LOS CABOS", "CI5 - COSTOS INDIRECTOS COLIMA", "CI6 - COSTOS INDIRECTOS QUINTANA ROO", "CI7 - COSTOS INDIRECTOS TIJUANA", "CI8 - COSTOS INDIRECTOS LA PAZ", "CI9 - COSTOS INDIRECTOS MEXICO", "CV1 - COSTOS VARIABLES FIRME", "DGA - DIRECCION GENERAL ADJUNTA", "F&F - F&F", "FNZ - FINANZAS", "GC1 - GASTOS COMERCIAL FIRME", "MCC - MULTICENTRO DE COSTO", "MOD - MANO DE OBRA DIRECTA", "OTE - OFICINA TECNICA", "PY1 - PROYECTOS ANTERIORES FIRME", "RRH - RECURSOS HUMANOS", "UT1 - UTILIDAD FIRME"], "obras": ["101 - CAMPAMENTO TRABAJADORES LA RIBERA", "102 - PROPIO DEPAS SANTA CRUZ LA RIBERA", "103 - REMODELACIONES Y ADECUACIONES OFICINAS", "103-1 - CENTRO FIRME", "103-2 - ADECUACIÓN OFICINAS FELIX ORTEGA", "104 - PRIVADO DEPAS VISTA CORTES", "105 - CAPUFE MODERNIZACION CASETA QRO", "106 - PRIVADO DEPARTAMENTOS CIAN", "107 - PRIVADO CASA BELLAVISTA", "108 - PRIVADO CIAN ALBAÑILERIA", "109 - CPMA MONTAGE MOV TIERRA", "109-1 MOVIMIENTO DE TIERRAS MONTAGE RESIDENCIAS", "109-2 MALLA PERIMETRAL MONTAGE", "109-3 MOVIMIENTO DE TIERRAS MONTAGE RESIDENCIAS", "110 - PROYECTOS ANTERIORES (HISTORICO) FIRME", "111 - BECK-OMNI INFRAESTRUCTURA PLUVIAL FIRME", "112 - CASA MURICA", "113 - CASA ANHELO", "114 - TALLER CJR OFICINAS LA CURVA", "115 - ACTIVOS FIJOS RENTA-REMODELACION", "116 - CPMA DUNNA", "117 - ADMINISTRACION DE PROYECTOS MENORES", "117 - 1 - ALTELUS", "118 - ACADEMIA DE PROTECCION FEDERAL ECATEPEC", "119 - ICIFED CENTRO COMUNITARIO ARBOLEDAS", "120 - TERRACERIAS FS EVENT SPACE", "121 - MOVIMIENTO DE TIERRAS OASIS", "122 - J.N. NUEVA CREACIÓN VILLAS PALMANOVA - ICIFED", "122-1 J.N. NC 2027-2025 (CANCHA DEPORTIVA)", "123 - CISTERNA SCA", "124 - REHABILITACIÓN OBRA PLUVIAL - REA NL", "125 - MOVIMIENTO DE TIERRAS MONTAGE CTTO 2", "125 - 1 MOVIMIENTO DE TIERRAS MONTAGE CTTO 3", "126 - REMODELACION OFICINAS ASP", "127 - ENTRE PIEDRAS", "127-1 CONSTRUCCIÓN MURO ENTRE PIEDRAS", "127-2 SUMINISTRO MATS MURO ENTRE PIEDRAS", "127-3 SUMINISTRO MATS ESTRUCTURA ENTRE PIEDRAS", "127-4 INSTALACIONES GIMNASIO", "127-5 INSTALACIONES ACCESO ENTREPIEDRAS", "127-6 INFRAESTRUCTURA PLUVIAL ENTREPIEDRAS", "127-7 TERRACERIAS TORRE 1 ENTREPIEDRAS", "127-8 SUMINISTRO MATS TORRE 2", "127-9 ESTRUCTURA TORRE 2", "128 - TRABAJOS REPARACIONES B HERMANOS", "129 - CONSTRUCCION PUENTE LA PRESA", "130 - CONSTRUCCION CUARTEL", "130 - 1 REHABILITACION PARQUE OXTANKAH", "131 - ALBAÑILERÍAS EXTERIORES NAYAMA COPACHISA", "132 - PAVIMENTACIÓN CALLES COZUMEL", "134 - MANTENIMIENTO CLINICAS IMSS BIENESTAR", "135 - REMODELACIÓN OFICINAS GAP TIJUANA", "135-1 - VIALIDADES PROVISIONAL GAP TIJUANA", "136 - CASAS ENTREPIEDRAS", "136-1 SUM DE MATERIALES CASA TIPO ENTRE PIEDRAS", "137 - MODERNIZACIÓN P.I.V. \"PRECUOTA\", KM. 90+819", "140 - CONSERVACIÓN DE PAVIMENTOS EN PISTA", "141 - TERRACERIAS JARDIN RANCH", "143 - DISTRIBUIDOR VIAL TLAPACOTA", "144 - DEMOLICIÓN Y PLATAFORMAS AEROPUERTO TIJUANA", "145 - REHABILITACIÓN PLANETARIO", "A01 - GASTOS ADMINISTRATIVOS FIRME", "ADM - AREA ADMINISTRATIVA", "CI1 - COSTOS INDIRECTOS NUEVO LEON", "CI2 - COSTOS INDIRECTOS NAYARIT", "CI3 - COSTOS INDIRECTOS LA RIBERA", "CI4 - COSTOS INDIRECTOS LOS CABOS", "CI5 - COSTOS INDIRECTOS COLIMA", "CI6 - COSTOS INDIRECTOS QUINTANA ROO", "CI7 - COSTOS INDIRECTOS TIJUANA", "CI8 - COSTOS INDIRECTOS LA PAZ", "CI9 - COSTOS INDIRECTOS MEXICO", "CV1 - COSTOS VARIABLES FIRME", "DGA - DIRECCION GENERAL ADJUNTA", "F&F - F&F", "FNZ - FINANZAS", "GC1 - GASTOS COMERCIAL FIRME", "MCC - MULTICENTRO DE COSTO", "MOD - MANO DE OBRA DIRECTA", "OTE - OFICINA TECNICA", "PY1 - PROYECTOS ANTERIORES FIRME", "RRH - RECURSOS HUMANOS", "UT1 - UTILIDAD FIRME"], "partidas": ["1 - MATERIALES", "2 - MANO DE OBRA", "3 - INVENTARIO / AF", "4 - SUBCONTRATOS", "5 - INDIRECTOS", "6 - ADMINISTRATIVOS", "697 - INDIRECTOS", "699 - ANTICIPO PROVEEDORES", "699 - FONDO DE GARANTIA", "7 - GASTOS DE VENTA", "198 - MATERIALES", "298 - MANO DE OBRA/DESTAJOS", "498 - SUBCONTRATOS", "598 - INDIRECTOS", "698 - GASTOS OPERATIVOS ADMINISTRATIVOS", "798 - GASTOS OPERATIVOS VENTA"], "bancos": ["AUTOFIN", "AZTECA", "B&B", "BAJIO", "BAMSA", "BANAMEX", "BANCO FAMSA", "BANCOMEXT", "9. BANCOPPEL", "BANJERCITO", "BANOBRAS", "BANORTE", "BANREGIO", "BANSEFI", "BANSI", "BARCLAYS", "BBASE", "BBVA BANCOMER", "BMONEX", "BMULTIVA", "BULLTICK CB", "CB ACTINVER", "CB INTERCAM", "CB JPMORGAN", "CBDEUTSCHE", "CI BOLSA", "CIBANCO", "CLS", "COMPARTAMOS", "CONSUBANCO", "HSBC", "INBURSA", "INTERBANCO", "INVEX", "IXE", "JP MORGAN", "SANTANDER", "SCOTIABANK", "STP", "VE POR  MAS", "SABADELL", "N/A"]};

  var EMPRESAS = [
    { nombre: 'GRUPO FIRME DE MEXICO', rfc: 'GFM1211273F4', regimen: '601 - General de Ley Personas Morales', domicilio: 'DURANGO 2145 L1, FRACC. LA PERLA, LA PAZ, B.C.S., C.P. 23040' },
    { nombre: 'CONTROL DE INGENIERIA Y SERVICIOS AÑADIDOS', rfc: '', regimen: '', domicilio: '' },
    { nombre: 'CONSTRUCCIONES Y TERRACERIAS VANGUARDIA', rfc: '', regimen: '', domicilio: '' },
    { nombre: 'COMERCIALIZADORA MUPO', rfc: '', regimen: '', domicilio: '' },
    { nombre: 'INMOBILIARIA ATARDECER DE LA PAZ', rfc: '', regimen: '', domicilio: '' },
    { nombre: 'PROYECTOS Y DESARROLLOS PUNTA CORTEZ', rfc: '', regimen: '', domicilio: '' },
    { nombre: 'SANTA CRUZ FID', rfc: '', regimen: '', domicilio: '' }
  ];

  CAT.tiposOC = ['NORMAL', 'URGENTE', 'CRÍTICO', 'OTROS'];
  CAT.servicios = ['Generales', 'Honorarios', 'Fletes', 'Arrendamiento'];
  CAT.unidades = ['PZA', 'M', 'ML', 'M2', 'M3', 'KG', 'TON', 'G', 'LT', 'GAL', 'CUBETA', 'TAMBO', 'JGO', 'KIT', 'JUEGO', 'PAR', 'LOTE', 'SERV', 'ACT', 'EST', 'VIAJE', 'HR', 'DÍA', 'SEM', 'MES', 'BULTO', 'SACO', 'ROLLO', 'CAJA', 'PAQ', 'TRAMO', 'HOJA', 'PLIEGO', 'TABLA', 'VARILLA', 'CIENTO', 'MILLAR', 'TONELADA-KM', 'M3-KM', 'GLOBAL'];
  // Centros de costos por empresa. Vacío = la empresa ve todos. Llenar con la relación que mande Finanzas.
  CAT.ccPorEmpresa = {};
  // Obras por empresa. Vacío = la empresa ve todas.
  CAT.obrasPorEmpresa = {};
  CAT.formasPago = ['03 - Transferencia electrónica de fondos', '01 - Efectivo', '02 - Cheque nominativo', '04 - Tarjeta de crédito', '28 - Tarjeta de débito', '99 - Por definir'];
  CAT.metodosPago = ['PUE - Pago en una sola exhibición', 'PPD - Pago en parcialidades o diferido'];
  CAT.usosCfdi = ['G01 - Adquisición de mercancías', 'G02 - Devoluciones, descuentos o bonificaciones', 'G03 - Gastos en general', 'I01 - Construcciones', 'I02 - Mobiliario y equipo de oficina por inversiones', 'I03 - Equipo de transporte', 'I04 - Equipo de cómputo y accesorios', 'I05 - Dados, troqueles, moldes, matrices y herramental', 'I06 - Comunicaciones telefónicas', 'I07 - Comunicaciones satelitales', 'I08 - Otra maquinaria y equipo', 'S01 - Sin efectos fiscales'];
  CAT.regimenes = ['601 - General de Ley Personas Morales', '603 - Personas Morales con Fines no Lucrativos', '606 - Arrendamiento', '612 - Personas Físicas con Actividades Empresariales y Profesionales', '616 - Sin obligaciones fiscales', '621 - Incorporación Fiscal', '625 - Actividades Empresariales con ingresos a través de Plataformas Tecnológicas', '626 - Régimen Simplificado de Confianza', 'S01 - Sin efectos fiscales', 'EXT - Residente en el extranjero'];
  CAT.diasCredito = [0, 7, 15, 21, 30, 45, 60, 90];
  CAT.tasasIva = [{ v: '0.16', l: '16 %' }, { v: '0.08', l: '8 % (frontera)' }, { v: '0', l: '0 %' }, { v: 'EXENTO', l: 'Exento' }];

  var ESTADOS = [
    { id: 'por_autorizar', l: 'Pendiente', tone: 'warn' },
    { id: 'autorizada', l: 'Autorizada', tone: 'ok' },
    { id: 'rechazada', l: 'Rechazada', tone: 'bad' },
    { id: 'enviada', l: 'Enviada al proveedor', tone: 'info' },
    { id: 'recibida', l: 'Recibida', tone: 'info' },
    { id: 'facturada', l: 'Facturada', tone: 'info' },
    { id: 'pagada', l: 'Pagada', tone: 'ok' },
    { id: 'cancelada', l: 'Cancelada', tone: 'mute' }
  ];
  var ESTADO_LABEL = {}; ESTADOS.forEach(function (e) { ESTADO_LABEL[e.id] = e.l; });

  var LEYENDA = 'Sólo se recibirán facturas con su orden de compra correspondiente. Aceptación de pedido en términos y condiciones estipuladas. Una vez confirmada la recepción de la orden de compra de parte del proveedor se dispondrá de 5 días para enviar a la oficina central u obra la aceptación de la misma, de no recibir notificación alguna se dará por ACEPTADA.';
  var FORMATO = { codigo: 'FO-GF-02', rev: 'REV.00 ENE/26' };

  // ---------- utilidades ----------
  function num(v) { if (typeof v === 'number') return isFinite(v) ? v : 0; var n = parseFloat(String(v == null ? '' : v).replace(/[^0-9.\-]/g, '')); return isFinite(n) ? n : 0; }
  function r2(n) { return Math.round((n + Number.EPSILON) * 100) / 100; }
  var fmtMXN = new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN', minimumFractionDigits: 2 });
  function money(n, moneda) { var s = fmtMXN.format(r2(n || 0)); return moneda === 'DOLARES' ? s.replace('$', 'US$') : s; }
  function pct(n) { var v = Math.round(num(n) * 10000) / 100; return (v % 1 ? v.toFixed(2).replace(/0$/, '') : String(v)) + ' %'; }
  function fmtDate(iso) { if (!iso) return ''; var p = String(iso).slice(0, 10).split('-'); return p.length === 3 ? p[2] + '/' + p[1] + '/' + p[0] : iso; }
  function addDays(iso, n) { var p = String(iso).slice(0, 10).split('-'); var d = new Date(+p[0], +p[1] - 1, +p[2] + (+n || 0)); return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0'); }
  function todayISO() { var d = new Date(); d.setMinutes(d.getMinutes() - d.getTimezoneOffset()); return d.toISOString().slice(0, 10); }
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }

  var U = ['', 'Un', 'Dos', 'Tres', 'Cuatro', 'Cinco', 'Seis', 'Siete', 'Ocho', 'Nueve', 'Diez', 'Once', 'Doce', 'Trece', 'Catorce', 'Quince', 'Dieciséis', 'Diecisiete', 'Dieciocho', 'Diecinueve', 'Veinte', 'Veintiún', 'Veintidós', 'Veintitrés', 'Veinticuatro', 'Veinticinco', 'Veintiséis', 'Veintisiete', 'Veintiocho', 'Veintinueve'];
  var D = ['', 'Diez', 'Veinte', 'Treinta', 'Cuarenta', 'Cincuenta', 'Sesenta', 'Setenta', 'Ochenta', 'Noventa', 'Cien'];
  var C = ['', 'Ciento', 'Doscientos', 'Trescientos', 'Cuatrocientos', 'Quinientos', 'Seiscientos', 'Setecientos', 'Ochocientos', 'Novecientos'];
  function nr(n) {
    if (n === 0) return 'Cero';
    if (n < 30) return U[n];
    if (n <= 100) return D[Math.floor(n / 10)] + (n % 10 ? ' y ' + nr(n % 10) : '');
    if (n < 1000) return C[Math.floor(n / 100)] + (n % 100 ? ' ' + nr(n % 100) : '');
    if (n < 2000) return 'Mil' + (n % 1000 ? ' ' + nr(n % 1000) : '');
    if (n < 1000000) return nr(Math.floor(n / 1000)) + ' Mil' + (n % 1000 ? ' ' + nr(n % 1000) : '');
    if (n < 2000000) return 'Un Millón' + (n % 1000000 ? ' ' + nr(n % 1000000) : '');
    return nr(Math.floor(n / 1000000)) + ' Millones' + (n % 1000000 ? ' ' + nr(n % 1000000) : '');
  }
  function letras(x, moneda) {
    x = Math.abs(r2(num(x))); var ent = Math.floor(x); var cent = Math.round((x - ent) * 100);
    var usd = moneda === 'DOLARES';
    var txt = nr(ent);
    if (/(Millón|Millones)$/.test(txt)) txt += ' de';
    return txt + (usd ? (ent === 1 ? ' Dólar ' : ' Dólares ') : (ent === 1 ? ' Peso ' : ' Pesos ')) + (cent < 10 ? '0' : '') + cent + '/100 ' + (usd ? 'USD' : 'M.N.');
  }

  // ---------- reglas fiscales ----------
  // Retenciones que aplica GRUPO FIRME (persona moral) según el régimen del proveedor y el tipo de servicio.
  // Corrige la fórmula H17 del Excel FO-GF-02 (LEN(C16=13) y AND(,GD1531...)).
  function regCode(reg) { var m = String(reg || '').match(/^\s*([0-9]{3}|S01|EXT)/i); return m ? m[1].toUpperCase() : ''; }
  function esPersonaFisica(rfc) { return String(rfc || '').replace(/[^A-ZÑ&0-9]/gi, '').length === 13; }
  function retencionesSugeridas(regimen, rfc, servicio) {
    var code = regCode(regimen), pf = esPersonaFisica(rfc);
    var out = { isr: 0, iva: 0, motivo: 'Sin retenciones' };
    var RET_IVA_23 = 0.106667; // 2/3 partes del IVA (10.6667 %)
    if (servicio === 'Fletes') {
      out.iva = 0.04; out.motivo = 'Fletes: retención de IVA 4 %';
      if (code === '626' && pf) { out.isr = 0.0125; out.motivo += ' + ISR RESICO 1.25 %'; }
      return out;
    }
    if (!pf) { out.motivo = 'Proveedor persona moral: sin retenciones'; return out; }
    if (code === '606' || servicio === 'Arrendamiento') {
      if (code === '626') { out.isr = 0.0125; out.iva = RET_IVA_23; out.motivo = 'Arrendamiento con RESICO: ISR 1.25 % + IVA 10.67 %'; }
      else { out.isr = 0.10; out.iva = RET_IVA_23; out.motivo = 'Arrendamiento persona física: ISR 10 % + IVA 10.67 %'; }
      return out;
    }
    if (code === '626') {
      out.isr = 0.0125; out.motivo = 'RESICO persona física: ISR 1.25 %';
      if (servicio === 'Honorarios') { out.iva = RET_IVA_23; out.motivo += ' + IVA 10.67 %'; }
      return out;
    }
    if (code === '612' && servicio === 'Honorarios') { out.isr = 0.10; out.iva = RET_IVA_23; out.motivo = 'Honorarios persona física: ISR 10 % + IVA 10.67 %'; return out; }
    if (code === '612') { out.motivo = 'Persona física con actividad empresarial (compra general): sin retenciones'; return out; }
    if (code === '616' || code === 'S01') { out.motivo = 'Sin obligaciones fiscales: no emite factura'; return out; }
    return out;
  }

  // Cálculo de la orden (mismo orden que el Excel: las retenciones contractuales reducen el subtotal).
  function calcular(oc) {
    var items = oc.items || [];
    var bruto = 0, baseIva = 0, ivaBruto = 0;
    items.forEach(function (it) {
      var sub = r2(num(it.cantidad) * num(it.precioUnitario));
      it.subtotal = sub;
      bruto += sub;
      var t = String(it.tasaIva == null ? '0.16' : it.tasaIva);
      var rate = t === 'EXENTO' ? 0 : num(t);
      if (rate > 0) { baseIva += sub; ivaBruto += sub * rate; }
    });
    bruto = r2(bruto);
    var amort = r2(bruto * num(oc.pctAnticipo));
    var fondo = r2(bruto * num(oc.pctFondo));
    var otras = r2(bruto * num(oc.pctOtras));
    var subtotal = r2(bruto - amort - fondo - otras);
    var factor = bruto ? subtotal / bruto : 0;
    var emite = oc.emiteFactura !== 'NO';
    var iva = emite ? r2(ivaBruto * factor) : 0;
    var retIsr = emite ? r2(subtotal * num(oc.retIsrPct)) : 0;
    var retIva = emite ? r2(baseIva * factor * num(oc.retIvaPct)) : 0;
    var total = r2(subtotal + iva - retIsr - retIva);
    var tc = num(oc.tipoCambio) || 1;
    return { bruto: bruto, amort: amort, fondo: fondo, otras: otras, subtotal: subtotal, iva: iva, retIsr: retIsr, retIva: retIva, total: total, totalMXN: r2(total * (oc.moneda === 'DOLARES' ? tc : 1)) };
  }

  function obrasDeEmpresa(emp) { var l = CAT.obrasPorEmpresa[emp]; return l && l.length ? l : null; }
  function ccDeEmpresa(emp) { var l = CAT.ccPorEmpresa[emp]; return l && l.length ? l : null; }
  function maskClabe(c) { c = String(c || ''); return c.length > 4 ? '•••• ' + c.slice(-4) : c; }

  // ---------- PDF FO-GF-02 (jsPDF + autotable) ----------
  var logoCache = null;
  function loadLogo(src) {
    if (logoCache) return Promise.resolve(logoCache);
    return fetch(src || 'logo.png').then(function (r) { return r.blob(); }).then(function (b) {
      return new Promise(function (res) { var fr = new FileReader(); fr.onload = function () { logoCache = fr.result; res(logoCache); }; fr.readAsDataURL(b); });
    }).catch(function () { return null; });
  }
  function loadScript(src) { return new Promise(function (res, rej) { var s = document.createElement('script'); s.src = src; s.onload = res; s.onerror = rej; document.head.appendChild(s); }); }
  var pdfLibs = null;
  function ensurePdfLibs() {
    if (pdfLibs) return pdfLibs;
    pdfLibs = (global.jspdf ? Promise.resolve() : loadScript('https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js'))
      .then(function () { return global.jspdf && global.jspdf.jsPDF && global.jspdf.jsPDF.API.autoTable ? null : loadScript('https://cdnjs.cloudflare.com/ajax/libs/jspdf-autotable/3.8.2/jspdf.plugin.autotable.min.js'); });
    pdfLibs.catch(function () { pdfLibs = null; });
    return pdfLibs;
  }

  // oc: registro completo. opts: { clabeCompleta: bool, logo: 'logo.png' }
  function buildPdf(oc, opts) {
    opts = opts || {};
    return Promise.all([ensurePdfLibs(), loadLogo(opts.logo)]).then(function (res) {
      var logo = res[1];
      var jsPDF = global.jspdf.jsPDF;
      var doc = new jsPDF({ unit: 'pt', format: 'letter' });
      var W = doc.internal.pageSize.getWidth(), H = doc.internal.pageSize.getHeight(), M = 32;
      var NAVY = [194, 65, 12], INK = [43, 26, 18], SOFT = [110, 91, 78], TEAL = [67, 20, 7], ORANGE = [202, 138, 4], SKY = [231, 201, 160], LINE = [232, 220, 203];
      var t = calcular(oc), mon = oc.moneda || 'PESOS';
      var emp = EMPRESAS.filter(function (e) { return e.nombre === oc.empresa; })[0] || { nombre: oc.empresa || '', rfc: '', regimen: '', domicilio: '' };

      // franja superior
      doc.setFillColor(TEAL[0], TEAL[1], TEAL[2]); doc.rect(0, 0, W * 0.4, 6, 'F');
      doc.setFillColor(SKY[0], SKY[1], SKY[2]); doc.rect(W * 0.4, 0, W * 0.2, 6, 'F');
      doc.setFillColor(NAVY[0], NAVY[1], NAVY[2]); doc.rect(W * 0.6, 0, W * 0.25, 6, 'F');
      doc.setFillColor(ORANGE[0], ORANGE[1], ORANGE[2]); doc.rect(W * 0.85, 0, W * 0.15, 6, 'F');
      var y = 22;
      if (logo) doc.addImage(logo, 'PNG', M, y, 118, 33, 'logo', 'FAST');
      doc.setFont('helvetica', 'bold'); doc.setFontSize(15); doc.setTextColor(TEAL[0], TEAL[1], TEAL[2]);
      doc.text('ORDEN DE COMPRA', W - M, y + 12, { align: 'right' });
      doc.setFontSize(10.5); doc.setTextColor(NAVY[0], NAVY[1], NAVY[2]);
      doc.text(String(oc.folio || 'SIN FOLIO'), W - M, y + 27, { align: 'right' });
      doc.setFont('helvetica', 'normal'); doc.setFontSize(8); doc.setTextColor(SOFT[0], SOFT[1], SOFT[2]);
      doc.text('Fecha: ' + fmtDate(oc.fecha) + '   ·   ' + FORMATO.codigo + ' ' + FORMATO.rev, W - M, y + 39, { align: 'right' });
      y += 50;
      doc.setFont('helvetica', 'bold'); doc.setFontSize(9); doc.setTextColor(INK[0], INK[1], INK[2]);
      doc.text(emp.nombre, M, y);
      doc.setFont('helvetica', 'normal'); doc.setFontSize(7.5); doc.setTextColor(SOFT[0], SOFT[1], SOFT[2]);
      var empLine = [emp.rfc ? 'RFC ' + emp.rfc : '', emp.regimen ? 'Régimen ' + emp.regimen : '', emp.domicilio].filter(Boolean).join('   ·   ');
      if (empLine) doc.text(empLine, M, y + 10);
      y += 18;

      function kv(rows) {
        doc.autoTable({
          startY: y, margin: { left: M, right: M }, theme: 'grid', body: rows,
          styles: { font: 'helvetica', fontSize: 7.6, cellPadding: 3.2, lineColor: LINE, lineWidth: 0.5, textColor: INK, overflow: 'linebreak' },
          columnStyles: { 0: { fontStyle: 'bold', fillColor: [250, 243, 233], cellWidth: 82 }, 1: { cellWidth: (W - 2 * M) / 2 - 82 }, 2: { fontStyle: 'bold', fillColor: [250, 243, 233], cellWidth: 82 } }
        });
        y = doc.lastAutoTable.finalY;
      }
      kv([
        ['Solicitó', oc.solicitante || '', 'Autoriza', oc.autoriza || ''],
        ['Centro de costos', oc.cc || '', 'Tipo de O.C.', oc.tipoOC || 'NORMAL'],
        ['Requisición', oc.reqFolio || 'N/A', 'Frente / Estimación', [oc.frente || '—', oc.estimacion || 'NA'].join('  /  ')]
      ]);
      y += 8;
      doc.setFont('helvetica', 'bold'); doc.setFontSize(8.5); doc.setTextColor(NAVY[0], NAVY[1], NAVY[2]);
      doc.text('DATOS DEL PROVEEDOR', M, y + 8); y += 12;
      var clabe = opts.clabeCompleta ? (oc.provClabe || '') : maskClabe(oc.provClabe);
      kv([
        ['Proveedor', (oc.provNum ? '#' + oc.provNum + '  ' : '') + (oc.provNombre || ''), 'RFC', oc.provRfc || ''],
        ['Régimen fiscal', oc.provRegimen || '', 'Tipo de servicio', oc.servicio || 'Generales'],
        ['Banco', oc.provBanco || '', 'Cuenta / CLABE', clabe || ''],
        ['Forma de pago', oc.formaPago || '', 'Método de pago', oc.metodoPago || ''],
        ['Uso del CFDI', oc.usoCfdi || '', 'Días de crédito', (+oc.diasCredito ? oc.diasCredito + ' días' : 'Contado') + (oc.fechaPagoEstimada ? '  (pago aprox. ' + fmtDate(oc.fechaPagoEstimada) + ')' : '')],
        ['Emite factura', oc.emiteFactura === 'NO' ? 'NO' : 'SÍ', 'Moneda', mon + (mon === 'DOLARES' ? '  ·  T.C. ' + (oc.tipoCambio || 1) : '')]
      ]);
      y += 10;

      var body = (oc.items || []).map(function (it, i) {
        var tv = String(it.tasaIva == null ? '0.16' : it.tasaIva);
        return [String(i + 1), it.obra || '', String(r2(num(it.cantidad))), it.unidad || '', it.descripcion || '', it.partida || '', tv === 'EXENTO' ? 'Exento' : (num(tv) * 100) + '%', money(it.precioUnitario, mon), money(num(it.cantidad) * num(it.precioUnitario), mon)];
      });
      doc.autoTable({
        startY: y, margin: { left: M, right: M }, theme: 'striped',
        head: [['#', 'Obra', 'Cant.', 'Unidad', 'Descripción', 'Insumo', 'IVA', 'P. unitario', 'Subtotal']],
        body: body,
        headStyles: { fillColor: TEAL, textColor: 255, fontSize: 7.4, fontStyle: 'bold' },
        styles: { font: 'helvetica', fontSize: 7.4, cellPadding: 3, textColor: INK, overflow: 'linebreak', lineColor: LINE },
        alternateRowStyles: { fillColor: [252, 248, 242] },
        columnStyles: { 0: { cellWidth: 16, halign: 'center' }, 1: { cellWidth: 86 }, 2: { cellWidth: 32, halign: 'right' }, 3: { cellWidth: 36 }, 4: { cellWidth: 'auto' }, 5: { cellWidth: 84 }, 6: { cellWidth: 32, halign: 'center' }, 7: { cellWidth: 62, halign: 'right' }, 8: { cellWidth: 66, halign: 'right' } }
      });
      y = doc.lastAutoTable.finalY + 10;

      if (y > H - 250) { doc.addPage(); y = M; }
      // totales a la derecha, observaciones a la izquierda
      var tot = [['Importe', money(t.bruto, mon)]];
      if (t.amort) tot.push(['Amortización anticipo (' + pct(oc.pctAnticipo) + ')', '-' + money(t.amort, mon)]);
      if (t.fondo) tot.push(['Fondo de garantía (' + pct(oc.pctFondo) + ')', '-' + money(t.fondo, mon)]);
      if (t.otras) tot.push(['Otras retenciones (' + pct(oc.pctOtras) + ')', '-' + money(t.otras, mon)]);
      tot.push(['Subtotal', money(t.subtotal, mon)]);
      tot.push(['IVA', money(t.iva, mon)]);
      if (t.retIsr) tot.push(['Ret. ISR (' + pct(oc.retIsrPct) + ')', '-' + money(t.retIsr, mon)]);
      if (t.retIva) tot.push(['Ret. IVA (' + pct(oc.retIvaPct) + ')', '-' + money(t.retIva, mon)]);
      tot.push(['TOTAL', money(t.total, mon)]);
      if (mon === 'DOLARES') tot.push(['Equivalente M.N.', money(t.totalMXN)]);
      var startTot = y;
      doc.autoTable({
        startY: y, margin: { left: W - M - 220, right: M }, tableWidth: 220, theme: 'plain', body: tot,
        styles: { font: 'helvetica', fontSize: 8, cellPadding: 2.6, textColor: INK },
        columnStyles: { 0: { cellWidth: 125 }, 1: { halign: 'right', font: 'courier', fontStyle: 'bold' } },
        didParseCell: function (d) { if (d.row.raw[0] === 'TOTAL') { d.cell.styles.fillColor = NAVY; d.cell.styles.textColor = 255; d.cell.styles.fontStyle = 'bold'; d.cell.styles.fontSize = 9.5; } }
      });
      var endTot = doc.lastAutoTable.finalY;
      var lw = W - 2 * M - 236;
      doc.setFont('helvetica', 'bold'); doc.setFontSize(7.6); doc.setTextColor(NAVY[0], NAVY[1], NAVY[2]);
      doc.text('SOLICITUD DE RECURSO / MOTIVO', M, startTot + 8);
      doc.setFont('helvetica', 'normal'); doc.setTextColor(INK[0], INK[1], INK[2]);
      var obs = doc.splitTextToSize(oc.observaciones || '—', lw);
      doc.text(obs.slice(0, 7), M, startTot + 19);
      var ly = startTot + 19 + Math.min(obs.length, 7) * 9 + 6;
      doc.setFont('helvetica', 'bold'); doc.setFontSize(7.6); doc.setTextColor(NAVY[0], NAVY[1], NAVY[2]);
      doc.text('IMPORTE CON LETRA', M, ly);
      doc.setFont('helvetica', 'normal'); doc.setTextColor(INK[0], INK[1], INK[2]);
      var lt = doc.splitTextToSize(letras(t.total, mon), lw); doc.text(lt, M, ly + 11);
      y = Math.max(endTot, ly + 11 + lt.length * 9) + 12;

      doc.setFontSize(6.8); doc.setTextColor(SOFT[0], SOFT[1], SOFT[2]);
      var ley = doc.splitTextToSize(LEYENDA, W - 2 * M); doc.text(ley, M, y); y += ley.length * 8 + 34;

      if (y > H - 70) { doc.addPage(); y = M + 40; }
      var colW = (W - 2 * M) / 3;
      var firmas = [['PROVEEDOR', oc.provNombre || ''], ['ELABORÓ', oc.solicitante || ''], ['AUTORIZÓ', oc.autoriza || '']];
      firmas.forEach(function (f, i) {
        var x = M + i * colW + 12, w = colW - 24;
        doc.setDrawColor(TEAL[0], TEAL[1], TEAL[2]); doc.setLineWidth(0.6); doc.line(x, y, x + w, y);
        doc.setFont('helvetica', 'bold'); doc.setFontSize(7.4); doc.setTextColor(INK[0], INK[1], INK[2]);
        var nm = doc.splitTextToSize(f[1], w).slice(0, 2);
        doc.text(nm, x + w / 2, y + 10, { align: 'center' });
        doc.setFont('helvetica', 'normal'); doc.setTextColor(SOFT[0], SOFT[1], SOFT[2]);
        doc.text(f[0], x + w / 2, y + 11 + nm.length * 9, { align: 'center' });
      });
      if (oc.autorizadoPor && oc.fechaAutorizacion && oc.estado !== 'rechazada' && oc.estado !== 'por_autorizar') {
        doc.setFontSize(6.6); doc.setTextColor(63, 125, 58);
        doc.text(doc.splitTextToSize('Autorizada electrónicamente el ' + fmtDate(oc.fechaAutorizacion) + ' por ' + oc.autorizadoPor, colW - 16), M + 2 * colW + colW / 2, y + 40, { align: 'center' });
      }

      // marca de agua por estado
      var wm = { por_autorizar: 'PENDIENTE DE AUTORIZACIÓN', rechazada: 'RECHAZADA', cancelada: 'CANCELADA' }[oc.estado || 'por_autorizar'];
      var pages = doc.internal.getNumberOfPages();
      for (var p = 1; p <= pages; p++) {
        doc.setPage(p);
        if (wm) {
          doc.saveGraphicsState && doc.saveGraphicsState();
          if (doc.GState) doc.setGState(new doc.GState({ opacity: 0.12 }));
          doc.setFont('helvetica', 'bold'); doc.setFontSize(wm.length > 12 ? 34 : 64); doc.setTextColor(185, 28, 28);
          var tw = doc.getTextWidth(wm), ang = 30 * Math.PI / 180;
          doc.text(wm, W / 2 - Math.cos(ang) * tw / 2, H / 2 + 60 + Math.sin(ang) * tw / 2, { angle: 30 });
          doc.restoreGraphicsState && doc.restoreGraphicsState();
        }
        doc.setFont('helvetica', 'normal'); doc.setFontSize(7); doc.setTextColor(SOFT[0], SOFT[1], SOFT[2]);
        doc.text(FORMATO.codigo + ' · ' + FORMATO.rev + ' · ' + (oc.folio || ''), M, H - 16);
        doc.text('Página ' + p + ' de ' + pages, W - M, H - 16, { align: 'right' });
      }
      return doc;
    });
  }


  // ---------- lectura de CFDI (XML/PDF) o Constancia de Situación Fiscal (PDF) para alta de proveedor ----------
  var RFC_RE = /\b([A-ZÑ&]{3,4})[\s-]?(\d{6})[\s-]?([A-Z0-9]{3})\b/g;
  var EMPRESA_RFCS = EMPRESAS.map(function (e) { return e.rfc; }).filter(Boolean).concat(['XAXX010101000', 'XEXX010101000']);
  function regimenPorCodigo(code) { code = String(code || '').trim(); return CAT.regimenes.filter(function (r) { return r.indexOf(code + ' ') === 0; })[0] || ''; }
  var pdfjsP = null;
  function loadPdfJs() {
    if (pdfjsP) return pdfjsP;
    pdfjsP = (global.pdfjsLib ? Promise.resolve() : loadScript('https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js')).then(function () {
      global.pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js'; return global.pdfjsLib;
    });
    pdfjsP.catch(function () { pdfjsP = null; });
    return pdfjsP;
  }
  function pdfText(file) {
    return Promise.all([file.arrayBuffer(), loadPdfJs()]).then(function (r) { return r[1].getDocument({ data: r[0] }).promise; }).then(function (doc) {
      var ps = []; for (var i = 1; i <= Math.min(doc.numPages, 3); i++) ps.push(doc.getPage(i).then(function (pg) { return pg.getTextContent(); }).then(function (tc) {
        var lines = [], last = null, cur = [];
        tc.items.forEach(function (it) { var y = Math.round(it.transform[5]); if (last !== null && Math.abs(y - last) > 3) { lines.push(cur.join(' ')); cur = []; } cur.push(it.str); last = y; });
        lines.push(cur.join(' ')); return lines.join('\n');
      }));
      return Promise.all(ps);
    }).then(function (t) { return t.join('\n'); });
  }
  function clean(s) { return String(s || '').replace(/\s+/g, ' ').replace(/^[\s:.\-]+|[\s:.\-]+$/g, '').trim(); }
  function after(text, labels) {
    for (var i = 0; i < labels.length; i++) {
      var m = text.match(new RegExp(labels[i] + '\\s*[:.]?\\s*([^\\n]{2,120})', 'i'));
      if (m && clean(m[1])) return clean(m[1]);
    }
    return '';
  }
  function parseXmlProveedor(xml) {
    var d = new DOMParser().parseFromString(xml, 'application/xml');
    var find = function (local) { var all = d.getElementsByTagName('*'); for (var i = 0; i < all.length; i++) if (all[i].localName === local) return all[i]; return null; };
    var em = find('Emisor'), re = find('Receptor'), comp = find('Comprobante');
    if (!em) return null;
    var pick = em;
    if (EMPRESA_RFCS.indexOf(String(em.getAttribute('Rfc') || '').toUpperCase()) < 0 && re && EMPRESA_RFCS.indexOf(String(re.getAttribute('Rfc') || '').toUpperCase()) < 0) pick = em;
    else if (EMPRESA_RFCS.indexOf(String(em.getAttribute('Rfc') || '').toUpperCase()) >= 0 && re) pick = re;
    var reg = pick.getAttribute('RegimenFiscal') || pick.getAttribute('RegimenFiscalReceptor') || '';
    return { fuente: 'XML del CFDI', nombre: clean(pick.getAttribute('Nombre')).toUpperCase(), rfc: String(pick.getAttribute('Rfc') || '').toUpperCase(), regimen: regimenPorCodigo(reg), cp: pick === re ? (re.getAttribute('DomicilioFiscalReceptor') || '') : (comp && comp.getAttribute('LugarExpedicion') || '') };
  }
  function parsePdfProveedor(text) {
    var T = text.replace(/\r/g, '');
    var esCsf = /CONSTANCIA DE SITUACI[OÓ]N FISCAL|C[eé]dula de identificaci[oó]n fiscal/i.test(T);
    var out = { fuente: esCsf ? 'Constancia de situación fiscal (PDF)' : 'PDF del CFDI', nombre: '', rfc: '', regimen: '', cp: '' };
    var rfcs = [], m; RFC_RE.lastIndex = 0;
    var up = T.toUpperCase();
    while ((m = RFC_RE.exec(up))) { var r = m[1] + m[2] + m[3]; if (rfcs.indexOf(r) < 0) rfcs.push(r); }
    var lbl = up.match(/RFC\s*(?:DEL\s*)?(?:EMISOR)?\s*[:.]?\s*([A-ZÑ&]{3,4}\d{6}[A-Z0-9]{3})/);
    out.rfc = (lbl && EMPRESA_RFCS.indexOf(lbl[1]) < 0 ? lbl[1] : '') || rfcs.filter(function (x) { return EMPRESA_RFCS.indexOf(x) < 0; })[0] || '';
    if (esCsf) {
      var razon = after(T, ['Denominaci[oó]n\\s*/\\s*Raz[oó]n\\s*Social', 'Denominaci[oó]n o Raz[oó]n Social', 'Raz[oó]n Social']);
      var nom = after(T, ['Nombre\\s*\\(s\\)']), ap1 = after(T, ['Primer Apellido']), ap2 = after(T, ['Segundo Apellido']);
      out.nombre = (razon && !/R[eé]gimen|Capital/i.test(razon) ? razon : [nom, ap1, ap2].filter(Boolean).join(' ')).toUpperCase();
      out.cp = (T.match(/C[oó]digo\s*Postal\s*[:.]?\s*(\d{5})/i) || [])[1] || '';
    } else {
      out.nombre = after(T, ['Nombre\\s*(?:del\\s*)?emisor', 'Raz[oó]n\\s*social\\s*(?:del\\s*)?emisor', 'Emisor\\s*:?\\s*Nombre', 'Emisor']).replace(/RFC.*$/i, '').toUpperCase();
      out.cp = (T.match(/(?:Lugar\s*de\s*expedici[oó]n|C\.?\s*P\.?)\s*[:.]?\s*(\d{5})/i) || [])[1] || '';
    }
    out.nombre = clean(out.nombre.replace(/[A-ZÑ&]{3,4}\d{6}[A-Z0-9]{3}/g, ''));
    var regs = T.match(/\b(60[1-9]|61[0-9]|62[0-9])\b/g) || [];
    var rg = T.match(/R[eé]gimen\s*Fiscal[^\n]{0,20}?(\d{3})/i);
    out.regimen = regimenPorCodigo(rg ? rg[1] : '') || '';
    if (!out.regimen) {
      var byName = CAT.regimenes.filter(function (r) { var n = r.slice(6).split(' ').slice(0, 3).join(' ').toUpperCase(); return n.length > 8 && up.indexOf(n) >= 0; })[0];
      out.regimen = byName || (regs[0] ? regimenPorCodigo(regs[0]) : '');
    }
    return out;
  }
  var BANCOS = { '002': 'BANAMEX', '012': 'BBVA BANCOMER', '014': 'SANTANDER', '021': 'HSBC', '030': 'BAJIO', '036': 'INBURSA', '042': 'MIFEL', '044': 'SCOTIABANK', '058': 'BANREGIO', '059': 'INVEX', '062': 'AFIRME', '072': 'BANORTE', '106': 'BANK OF AMERICA', '127': 'AZTECA', '128': 'AUTOFIN', '130': 'COMPARTAMOS', '137': 'BANCOPPEL', '138': 'ABC CAPITAL', '140': 'CONSUBANCO', '143': 'CIBANCO', '145': 'BBASE', '147': 'BANKAOOL', '156': 'SABADELL', '166': 'BANSEFI', '638': 'NU MEXICO', '646': 'STP', '722': 'MERCADO PAGO' };
  function clabeValid(c) { if (!/^\d{18}$/.test(c)) return false; var w = [3, 7, 1], t = 0; for (var i = 0; i < 17; i++) t += (+c[i] * w[i % 3]) % 10; return (10 - t % 10) % 10 === +c[17]; }

  // ---------- lectura de carátula bancaria (PDF) ----------
  function leerCaratula(file) {
    if (!(/\.pdf$/i.test(file.name) || /pdf/.test(file.type))) return Promise.resolve({});
    return pdfText(file).then(function (T) {
      var d = {}, flat = T.replace(/(\d)[ \-](?=\d)/g, '$1');
      var lbl = T.match(/CLABE[^\d\n]{0,30}([\d \-]{18,26})/i);
      if (lbl) { var c = lbl[1].replace(/\D/g, ''); if (clabeValid(c)) d.clabe = c; }
      if (!d.clabe) d.clabe = (flat.match(/\d{18}/g) || []).filter(clabeValid)[0] || '';
      if (d.clabe) d.banco = BANCOS[d.clabe.slice(0, 3)] || '';
      var cta = T.match(/(?:No\.?|N[uú]mero)\s*de\s*cuenta[^\d\n]{0,15}(\d{8,12})\b/i);
      if (cta) d.cuenta = cta[1];
      var tit = T.match(/(?:Titular|Nombre del cliente|Raz[oó]n social|Cliente|Nombre)\s*[:.]?\s*([A-ZÁÉÍÓÚÑ][A-ZÁÉÍÓÚÑ0-9 .,&]{4,90})/);
      if (tit) d.titular = tit[1].replace(/\s+(RFC|R\.F\.C|CLABE|CUENTA|No\.).*$/i, '').replace(/\s+/g, ' ').trim();
      return d;
    }).catch(function () { return {}; });
  }
  // Devuelve { fuente, nombre, rfc, regimen, cp } (campos vacíos si no se detectan)
  function leerDocumentoProveedor(file) {
    if (/\.xml$/i.test(file.name) || /xml/.test(file.type)) return file.text().then(function (x) { var r = parseXmlProveedor(x); if (!r) throw new Error('El XML no es un CFDI válido.'); return r; });
    if (/\.pdf$/i.test(file.name) || /pdf/.test(file.type)) return pdfText(file).then(function (t) { if (!t.trim()) throw new Error('El PDF no tiene texto (¿es escaneado?). Captura los datos a mano.'); return parsePdfProveedor(t); });
    return Promise.reject(new Error('Sube un XML o PDF.'));
  }

  global.OC = {
    CAT: CAT, EMPRESAS: EMPRESAS, ESTADOS: ESTADOS, ESTADO_LABEL: ESTADO_LABEL, LEYENDA: LEYENDA, FORMATO: FORMATO,
    num: num, r2: r2, money: money, pct: pct, fmtDate: fmtDate, addDays: addDays, todayISO: todayISO, esc: esc,
    letras: letras, regCode: regCode, esPersonaFisica: esPersonaFisica, retencionesSugeridas: retencionesSugeridas,
    calcular: calcular, maskClabe: maskClabe, ccDeEmpresa: ccDeEmpresa, obrasDeEmpresa: obrasDeEmpresa, leerCaratula: leerCaratula, buildPdf: buildPdf, ensurePdfLibs: ensurePdfLibs,
    leerDocumentoProveedor: leerDocumentoProveedor, parsePdfProveedor: parsePdfProveedor, parseXmlProveedor: parseXmlProveedor, regimenPorCodigo: regimenPorCodigo, BANCOS: BANCOS, clabeValid: clabeValid
  };
})(window);
