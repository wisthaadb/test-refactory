import React from "react";
import Container from '@material-ui/core/Container';

export default function PrintResult({namaWarung, tanggal, jam, namaKasir, listProduk}){
    const MAX_LENGTH = 30; //limit max karakter
    return(
        <Container maxWidth="sm">
    {/* output nama warung */}
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
    {/* output tanggal */}
    <p>Tanggal : {tanggal} {jam}</p>
    
    {/* output nama kasir */}
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
    {/* output produk dan harga */}
    {listProduk.map(item => {
          return  <p><span>{item.produk}</span> <span>{item.harga}</span></p>     
        })}
    </Container>
    )
}