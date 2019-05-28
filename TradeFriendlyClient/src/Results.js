import React, { Component } from 'react';
import socketIOClient from "socket.io-client";
import './App.css';
import { TradeFriendlyFooter } from '../src/Footer';
import { TradeFriendlyHeader } from './Header'
import { TradeFriendlySearchBar } from './SearchBar'
import { AccueilMessage } from './AccueilMessage'
import Button from 'react-bootstrap/Button';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import steamAvatar from './steamAvatar.png';
import Image from 'react-bootstrap/Image';
import { Jumbotron } from 'react-bootstrap';


const item1 = ['Ak-47', 'Wasteland Rebel', 'Field Tested', '0.15726338326930999756'];
const item2 = ['M4A4', 'Poseidon', 'Factory New', '0.02896273881196975708'];
const item3 = ['AWP', 'Graphite', 'Factory New', '0.05085860565304756165'];

const friendlist = ["76561197962769663", "76561197968161687", "76561197972860399", "765611979735 11342", "76561197984173333", "76561197990601735", "76561197991309054", "765611 97991171756"];

const elements2 = [item1, item3, item3];

const SearchInput = "{requested item}"


export function Results(data) {



  if (data == 1)
    return ("");
  return (
    <div>
      <h1 id="TitreResultats"> <span class="ImportantWord">{friendlist.length}</span> Search results for <span className="ImportantWord">{SearchInput}</span></h1>
      <ul>
        {
          friendlist.map((id64) => {
            return (
              <div class="container">
                <div class="row">
                  <div class="resultItems">
                    <div class="container">
                      <div class="row ">
                        <div class="col-md-3">
                          <Image className="resultImage" src={steamAvatar} />
                        </div>
                        <div class="col-md-8">
                          <div>
                            <h4><span className="ImportantWord">NameOfFriend</span> 's {SearchInput}</h4><br />
                            <p>Float value : </p>

                            <button type="button" class="btn btn-outline-light">Inspect in game</button>
                            <a target="_blank" href={'"http://steamcommunity.com/profiles/' + { id64 }.id64 + '"'}>
                              <button class="btn btn-outline-light float-right">Steam profile of <span className="ImportantWord">NameOfFriend</span></button>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })
        }
      </ul>
    </div>
  );
  // save
  return (
    <div>
      <h1 id="TitreResultats">Search results for <span className="ImportantWord">XXXXXXXXX</span></h1>
      <ul>
        {
          elements2.map((value, index) => {
            return (
              <li key={index}>
                <div class="resultItems">
                  <div class="container">
                    <div class="row ">
                      <div class="col-md-3">
                        {/* <Image className="resultImage" src={Ak47image} /> */}
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