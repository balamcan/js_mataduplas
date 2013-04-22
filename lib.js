/*
 * 
 * @param Array a Arreglo que se va a quitar los duplicados
 * @returns Array Regresa un areglo sin duplicados, tambien otro 
 * beneficio es que si es numerico lo devuelve ordenado y con su 
 * tipo original.
 */
function mataDuplas(a) {
    var tmp = [], i = 0, ln = a.length, res = [], type = '';
    type = typeof(a[0]);
    for (; i < ln; i++) {
        tmp[a[i]] = 1;
    }
    for (var j in tmp) {
        if (type === 'number')
            res.push(parseInt(j));
        else
            res.push(j);
    }
    return res;
}