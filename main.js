let ingreso = prompt('Ingresar sueldo bruto para calcular el neto o "cancelar" para terminar.').toUpperCase();

const smvm = 65000;

const cbv = 152515;

const auto = 3100000;

const casa_cap = 66500000;

const anio = 12;

function calcular_sueldo_neto (ingreso, porcentaje){
    if(ingreso < 200000){

        return ingreso - (ingreso * porcentaje)

    }
    else if(ingreso >= 200000){

        return ingreso - (ingreso * porcentaje)

    }
    else if(ingreso >= 350000){

        return ingreso - (ingreso * porcentaje)

    }

}

function retenciones (ingreso){

    if(ingreso < 200000){

        return 0.15

    }
    else if(ingreso >=  200000){

        return 0.25

    }
    else{

        return 0.35

    }

}

function calcular_dif_smvm (sueldo_neto, smvm){

    return sueldo_neto - smvm

}

function calcular_dif_cbv (sueldo_neto, cbv){

    return sueldo_neto - cbv

}

function calc_sueldos_auto (sueldo_neto, auto){

    return parseFloat(auto / sueldo_neto).toFixed(1)

}

function calc_sueldos_casa_cap (sueldo_neto, casa_cap){

    return parseFloat(casa_cap / sueldo_neto).toFixed(1)

}

function calc_meses_anios (anio, sueldos_auto){

    return parseFloat(sueldos_auto / anio).toFixed(2)

}

while (ingreso !== "SALIR"){

    ingreso = parseInt(ingreso);

    if(isNaN(ingreso)){

        alert("Debés ingresar números o la palabra salir");

    }
    else{

        let porcentaje = retenciones(ingreso);

        let sueldo_neto = calcular_sueldo_neto(ingreso, porcentaje);

        let dif_smvm = calcular_dif_smvm (sueldo_neto, smvm);

        let dif_cbv = calcular_dif_cbv (sueldo_neto, cbv);

        let sueldos_auto = calc_sueldos_auto(sueldo_neto, auto);

        let sueldos_casa_cap = calc_sueldos_casa_cap(sueldo_neto, casa_cap);

        let sueldos_anios = calc_meses_anios (anio, sueldos_auto);

        let sueldos_anios_1 = calc_meses_anios (anio, sueldos_casa_cap)

        alert("Tu sueldo neto es: " + sueldo_neto + ", la diferencia con el SMVM es de: " + dif_smvm + ", además la diferencia con la CBV es de: " + dif_cbv + ". Necesitas un total de: " 
    
        + sueldos_auto + " sueldos para comprar el auto 0km más barato del mercado actualmente (" + sueldos_anios + " años). También necesitas " + sueldos_casa_cap 
    
        + " sueldos para comprar una casa en bs as capital, serían " + sueldos_anios_1 + " años.");

    }

    ingreso = prompt('Ingresar sueldo bruto para calcular el neto o "salir" para terminar.').toUpperCase();

}