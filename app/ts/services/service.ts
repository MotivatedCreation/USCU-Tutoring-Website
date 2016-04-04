import {Http, Headers} from 'angular2/http';

import {Global} from '../global'

export function requestServiceWithActionAndParameters(service: string, action: string, actionParameters: {})
{
  var request = {'service': service,
                 'action': action,
                 'parameters': actionParameters};

  return 'request=' + encodeURIComponent(JSON.stringify(request));
}
