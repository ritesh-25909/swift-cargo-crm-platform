/* Same pinned SheetJS release as the existing CRM. No workbook data is uploaded. */
self.onmessage = ({data}) => {
  try {
    if (!self.XLSX) importScripts('https://cdn.jsdelivr.net/npm/xlsx@0.18.5/dist/xlsx.full.min.js');
    const wb = self.XLSX.read(data.buffer,data.readOptions);
    const names = data.firstOnly ? wb.SheetNames.slice(0,1) : wb.SheetNames;
    self.postMessage({result:{names,matrices:names.map(n=>self.XLSX.utils.sheet_to_json(wb.Sheets[n],data.jsonOptions))}});
  } catch(e) { self.postMessage({error:String(e.message||e)}); }
};
