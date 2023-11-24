import React, { useState } from "react";
import { Card, CardContent, Button } from "@mui/material";
import { grey } from "@mui/material/colors";

export function Peliculas({ peliculas }) {
  const [expandedCard, setExpandedCard] = useState(null);

  const handleToggleExpand = (index) => {
    setExpandedCard((prev) => (prev === index ? null : index));
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      {peliculas.map((item, index) => (
        <div>
          <Card
            sx={{
              width: 650,
              margin: 1,
              backgroundColor: "#60606088",
              color: "#e9ecef",
              textAlign: "left",
            }}
          >
            <CardContent sx={{ paddingLeft: "5px" }}>
              Titulo: {item.primaryTitle}
            </CardContent>
            <div
              style={{
                padding: "5px",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <Button
                variant="outlined"
                style={{ color: grey[100], borderColor: grey[100] }}
                onClick={() => handleToggleExpand(index)}
              >
                {expandedCard === index ? "Contraer" : "Detalles"}
              </Button>
            </div>
            {expandedCard === index && (
              <CardContent sx={{ paddingLeft: "5px" }}>
                Tipo: {item.titleType}
                <br/>
                Géneros:{" "}
                {item.genres.split(",").map((genre, index) => (
                  <Button
                    key={index}
                    variant="outlined"
                    style={{ marginRight: "5px", marginBottom: "5px" }}
                  >
                    {genre.trim()}
                  </Button>
                ))}
                <br/>
                Año de estreno:{item.startYear}
                {item.endYear !== null && (
                  <>- Año de finalización: {item.endYear}</>
                )}
                <br/>
                {item.isAdult !== false ? (
                  <> Para todo Publico: No</>
                ) : (
                  <> Para todo Público: Sí</>
                )}
                <br/>
                {item.principals.length > 0 && (
                  <>Reparto:</>
                )}
                {item.principals.map((persona) => (
                  <div>
                    Nombre: {persona.actor.primaryName} -{" "}
                    {persona.actor.birthYear !== null && (
                      <>
                        ({persona.actor.birthYear} -{" "}
                        {persona.actor.deathYear !== null ? (
                          <>{persona.actor.deathYear}</>
                        ) : (
                          <>Esta vivo</>
                        )}
                        )
                      </>
                    )}{" "}
                    Trabajo: {persona.category}
                    {persona.characters !== null && (
                      <> Personaje: {persona.characters}</>
                    )}
                  </div>
                ))}
              </CardContent>
            )}
          </Card>
        </div>
      ))}
    </div>
  );
}
