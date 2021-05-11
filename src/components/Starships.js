import React from "react";
import { Card } from "semantic-ui-react";

export default function Starships({ data }) {
  return (
    <div>
      <div className="cards">
        {data.map((ship, i) => {
          return (
            <div className="column" key={i}>
              <Card className="card">
                <div className="card-inner">
                  <div className="card-front">
                    <h2>{ship.name}</h2>
                  </div>
                  <div className="card-back">
                    <ul>
                      <li>
                        <strong>Model:</strong>
                        <div>{ship.model}</div>
                      </li>
                      <li>
                        <strong>Manufacturer:</strong>
                        <div>{ship.manufacturer}</div>
                      </li>

                      <li>
                        <strong>MGLT:</strong>
                        <div>{ship.MGLT}</div>
                      </li>
                      <li>
                        <strong>Max Aptmosphering Speed:</strong>
                        <div>
                          {ship.max_atmosphering_speed} <span>km/h</span>
                        </div>
                      </li>
                      <li>
                        <strong>Length:</strong>
                        <div>
                          {ship.length} <span>meters</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
}
