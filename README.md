Sample node.js app deployment with Ansible
-------------------------------------------


Clone this code into Bastion host and follow the below steps to deploy
--
```
cd deploy
ansible-playbook deploy.yml -i demo -u root -e env=demo
```
