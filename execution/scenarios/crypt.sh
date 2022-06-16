bash execution/chains/earth/configuration.sh
bash execution/chains/mars/configuration.sh

################
#authentication#
################
#earth-mars
crossdomaind tx cdac send-authenticate-domain cdac channel-0  --from alice --yes --home ~/.earth --chain-id earth --node tcp://localhost:26657 --gas=auto --gas-adjustment=1.15
sleep 5

#crossdomaind query cdac list-domain --node tcp://localhost:26657

#############
#cooperation#
#############
#earth-mars
crossdomaind tx cdac send-establish-cooperation  cdac channel-0  "2022-02-03 00:00:00" "2023-02-03 00:00:00" "computing" 200 --from alice --yes --home ~/.earth --chain-id earth --node tcp://localhost:26657 --gas=auto --gas-adjustment=1.15
sleep 5

#########################
#modify-cooperation-cost#
#########################
#earth-mars
crossdomaind tx cdac send-modify-cooperation-cost  cdac channel-0  300 --from alice --yes --home ~/.earth --chain-id earth --node tcp://localhost:26657 --gas=auto --gas-adjustment=1.15

crossdomaind query cdac list-cooperation-log --node tcp://localhost:26657

crossdomaind query cdac list-domain-cooperation --node tcp://localhost:26657