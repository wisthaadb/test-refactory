import React from "react";
import Container from '@material-ui/core/Container';

export default function PrintResult({namaWarung, tanggal, jam, namaKasir, listProduk}){
    const MAX_LENGTH = 30;
    return(
        <Container maxWidth="sm">
        <div>
        {namaWarung.length > MAX_LENGTH ?
            (
            <div>
                {`${namaWarung.substring(0, MAX_LENGTH)}`}
            </div>
            ) :
            <p>{namaWarung}</p>
        }
        </div>
        
    <p>Tanggal : {tanggal} {jam}</p>
    
    <div>
        {namaKasir.length > MAX_LENGTH ?
            (
            <div>
                {`${namaKasir.substring(0, MAX_LENGTH)}`}
            </div>
            ) :
            <p>{namaKasir}</p>
        }
    </div>
    <p>================================</p>
    {listProduk.map(item => {
          return  <p><span>{item.produk}</span> <span>{item.harga}</span></p>     
        })}
    </Container>
    )
}