import React, { useState } from "react";
import TextField from '@material-ui/core/TextField';
import { FormGroup, Label, Input} from 'reactstrap';
import PrintResult from "./printResult";



export default function PrintDotMatrix(props) {
    const [namaWarung, setWarung] = useState("");
    const [tanggal, setTanggal] = useState("");
    const [jam, setJam] = useState("");
    const [namaKasir, setKasir] = useState("");
    const [listProduk,setProduk] = useState([{ produk: '', harga: '' }]);


    console.log(listProduk)
  
    const handleChangeProduk = (i, e) => {
        const produk = [...listProduk];
        produk[i].produk = e.target.value;
        setProduk(produk);
      }

    const handleChangeHarga = (i, e) => {
        const _listProduk = [...listProduk];
        _listProduk[i].harga = e.target.value;
        setProduk(_listProduk);
      }

    const handleAdd = () => {
        const _listProduk = [...listProduk];
        _listProduk.push({ nama: '', kota: '' });
        setProduk(_listProduk);
      }

    const handleRemove = (i) => {
        const _listProduk = [...listProduk];
        _listProduk.splice(i, 1);
        setProduk(_listProduk);
      }

    const handleSubmit = () => {
        console.log(listProduk)
      }

    return (
      <div>
        <form>
            <TextField id="standard-basic" label="Nama Warung" onChange={(e) => setWarung(e.target.value)}
            />
        </form>

        <FormGroup>
            <Label for="exampleDate" style={{margin:'2em'}}>Date</Label>
            <Input
                type="date"
                name="date"
                id="exampleDate"
                placeholder="date placeholder"
                onChange={(e) => setTanggal(e.target.value)}
            />
      </FormGroup>
      <FormGroup>
            <Label for="exampleTime" style={{margin:'2em'}}>Time</Label>
            <Input
                type="time"
                name="time"
                id="exampleTime"
                placeholder="time placeholder"
                onChange={(e) => setJam(e.target.value)}
            />
      </FormGroup>
        <form>
            <TextField id="standard-basic" label="Nama Kasir" onChange={(e) => setKasir(e.target.value)}/>
        </form>

        {listProduk.map((field, i) => {
            return (
                <div className="form-input-wrapper" key={i} style={{margin:'1em'}}>
                <input
                    type="text"
                    value={field.produk}
                    className="form-input"
                    placeholder="produk"
                    label={field.produk}
                    onChange={e => handleChangeProduk(i, e)}
                />
                <input
                    value={field.harga}
                    className="form-input"
                    type="text"
                    placeholder="harga"
                    label={field.harga}
                    onChange={e => handleChangeHarga(i, e)}
                />
                <button type="button" onClick={() => handleRemove(i)} className="btn-remove">x</button>
                </div>
            )
            })}
        <div className="btn-wrapper">
        <button type="button" onClick={handleAdd} className="btn-add">+</button>
        </div>

        <div>
            <h1>Hasil</h1>
            {/* <p>{selectedDate}</p> */}
        </div>

        <div>
            <PrintResult 
            namaWarung={namaWarung} 
            tanggal={tanggal} 
            jam={jam} 
            namaKasir={namaKasir}
            listProduk={listProduk}
            />
        </div>
      </div>
      
      

    );
  
}

