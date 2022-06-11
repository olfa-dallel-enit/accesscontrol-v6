crossdomaind tx crossdomain configure-local-domain   "" "" "" ""   --from alice --yes --home ~/.jupiter --chain-id jupiter --node tcp://localhost:26668 --gas=auto --gas-adjustment=1.15
crossdomaind query crossdomain show-local-domain --node tcp://localhost:26668
crossdomaind query crossdomain show-local-domain-certificate --node tcp://localhost:26668
crossdomaind query crossdomain  show-private-key  --node tcp://localhost:26668
crossdomaind query crossdomain show-root-certificate --node tcp://localhost:26668

crossdomaind tx crossdomain  create-forward-policy "broadcast" "" "" --from alice --yes --home ~/.jupiter --chain-id jupiter --node tcp://localhost:26668 --gas=auto --gas-adjustment=1.15
crossdomaind query crossdomain show-forward-policy --node tcp://localhost:26668

#constraintless
crossdomaind tx crossdomain  create-decision-policy 0 '' '' '{}' "" --from alice --yes --home ~/.jupiter --chain-id jupiter --node tcp://localhost:26668 --gas=auto --gas-adjustment=1.15