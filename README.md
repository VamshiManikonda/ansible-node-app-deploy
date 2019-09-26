Sample node.js app deployment with Ansible
-------------------------------------------


Clone this code into Bastion host and follow the below steps to deploy
--
```
cd deploy
ansible-playbook deploy.yml -i demo -u root -e env=demo
```

Load Balancer URL
---------------------
http://toubispoc-non-prod-loadbalancer-652699906.us-east-1.elb.amazonaws.com/

I used ELB pointing to an Nginx server(loadbalancer) present in private subnet which will distribute the traffic between 2 node app servers present in private subnets.

