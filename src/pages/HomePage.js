import styled from 'styled-components/macro'

export default function HomePage({ favouriteWizards }) {
  return (
    <PageLayout>
      {favouriteWizards ? (
        <ul>
          {favouriteWizards.map((wizard) => (
            <li>{wizard}</li>
          ))}
        </ul>
      ) : (
        <span>You need to create a list of favourite wizards first!</span>
      )}
    </PageLayout>
  )
}

const PageLayout = styled.div`
  display: grid;
  gap: 20px;
  place-items: center;
  padding: 8px;
`
