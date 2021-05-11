import React from "react";
import { Card } from "semantic-ui-react";

export default function Vehicles({ data }) {
  return (
    <div>
      <div className="cards">
        {data.map((vehicle, i) => {
          return (
            <div className="column" key={i}>
              <Card className="card">
                <div className="card-inner">
                  <div className="card-front">
                    <h2>{vehicle.name}</h2>
                  </div>
                  <div className="card-back">
                    <ul>
                      <li>
                        <strong>Model:</strong>
                        <div>{vehicle.manufacturer}</div>
                      </li>
                      <li>
                        <strong>Manufacturer:</strong>
                        <div>{vehicle.manufacturer}</div>
                      </li>
                      <li>
                        <strong>Class:</strong>
                        <div>{vehicle.vehicle_class}</div>
                      </li>
                      <li>
                        <strong>Max Aptmosphering Speed:</strong>
                        <div>
                          {vehicle.max_atmosphering_speed} <span>km/h</span>
                        </div>
                      </li>
                      <li>
                        <strong>Length:</strong>
                        <div>
                          {vehicle.length} <span>meters</span>
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
