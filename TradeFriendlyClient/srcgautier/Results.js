import React, { Component } from 'react';
import socketIOClient from "socket.io-client";
import './App.css';
import { TradeFriendlyFooter } from './Footer';
import { TradeFriendlyHeader } from './Header'
import { TradeFriendlySearchBar } from './SearchBar'
import { AccueilMessage } from './AccueilMessage'
import Button from 'react-bootstrap/Button';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Ak47image from './Ak47-Redline.png';
import Image from 'react-bootstrap/Image';


const item1 = ['Ak-47', 'Wasteland Rebel', 'Field Tested', '0.15726338326930999756'];
const item2 = ['M4A4', 'Poseidon', 'Factory New', '0.02896273881196975708'];
const item3 = ['AWP', 'Graphite', 'Factory New', '0.05085860565304756165'];

const elements2 = [item1, item3, item3];

export function Results(data) {

  

  if (data == 1)
    return ("");
  return (
    <div>
      <h1 id="TitreResultats">Search results for <span className="ImportantWord">XXXXXXXXX</span></h1>
      <ul>
        {
          /*name of weapon */
          /*name of skin */
          /*usure */
          /*Float value */
          elements2.map((value, index) => {
            return (
              <li key={index}>
                <div class="resultItems">
                  <div class="container">
                    <div class="row ">
                      <div class="col-md-3">
                        <Image className="resultImage" src={Ak47image} />
                      </div>
                      <div class="col-md-8">
                        <div>
                          <h4><span className="ImportantWord">NameOfFriend</span> 's {value[0]} | {value[1]} ({value[2]})</h4><br />
                          <p>Float value : {value[3]}</p>

                          <button type="button" class="btn btn-outline-dark">Inspect in game</button>
                          <button type="button" class="btn btn-outline-light float-right">Add <span className="ImportantWord">NameOfFriend</span></button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
}   