import { Request, Response } from 'express'

class TestController {
  public async index (_req: Request, res: Response): Promise<Response> {
    return res.json({
      message: 'Hello world :)'
    })
  }
}

const testController = new TestController()

export { testController }
