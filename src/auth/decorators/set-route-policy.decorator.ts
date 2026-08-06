import { RoutePolicies } from "../enum/route-policies.enum";
import { SetMetadata } from '@nestjs/common';

export const setRoutePolicy = (policy: RoutePolicies) => {
    return SetMetadata('ROUTE_POLICY_KEY', policy);
}

