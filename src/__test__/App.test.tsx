import { cleanup, render, screen } from "@testing-library/react"
import App from "../App"

describe('App', ()=>{
    beforeEach(cleanup)

    describe('When it is rendered', ()=>{
        beforeEach(()=>{
            render(<App />)
        })
        test('Should show "Bienvenidos al Himalaya!"', async()=>{
            expect(screen.getByText(/Bienvenidos al Himalaya!/i)).toBeInTheDocument()
        })
    })
})