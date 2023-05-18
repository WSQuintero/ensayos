/* eslint-disable array-callback-return */
import { FetchData } from './fetchAPI'
import { useEffect, useState } from 'react'
import { Card } from './card'
import './containerCharacters.css'
// eslint-disable-next-line react/prop-types
export function ContainerCharacters ({ endpoint }) {
  const [data, setData] = useState(null)
  useEffect(() => {
    const fetchDataFromAPI = async () => {
      const response = await FetchData(endpoint)
      setData(response)
    }

    fetchDataFromAPI()
  }, [])

  if (data !== null) {
    return (
      <section className="containerCharacters">
        {data.map((character) => {
          if (character.image !== '') {
            return (
              <Card
                key={`${character.name}-${character.actor}`}
                image={character.image}
                actor={character.actor}
                name={character.name}
              />
            )
          }
        })}
      </section>
    )
  }
}
