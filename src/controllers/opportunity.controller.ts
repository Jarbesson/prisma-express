import {Request, Response, response } from "express";
import { OpportunityServices } from "../services/opportunity.servicec";
import { inject, injectable } from "tsyringe";

injectable();
export class OpportunityControllers {
      constructor(@inject("OpportunityServices") private opportunityServices: OpportunityServices){}

  async create(req: Request, res: Response) {
    const response =  await this.opportunityServices.create(req.body);

   return res.status(201).json(response);
  }

  async findMany(req: Request, res: Response) {    
    const response =  await this.opportunityServices.findMany();

    return res.status(200).json(response);

  }

  async findOne(req: Request, res: Response) {
    const response = await this.opportunityServices.findOne(res.locals.opportunity);

    return res.status(200).json(response);
  }

  async update(req: Request, res: Response) {
    const response =  await this.opportunityServices.update(Number(req.params.id), req.body);

    return res.status(200).json(response);
  }

  async delete(req: Request, res: Response) {
    await this.opportunityServices.delete(Number(req.params.id));

    return res.status(204).json();
  }
}
