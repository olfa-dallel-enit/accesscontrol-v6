

ignite chain serve -c execution/chains/earth/earth.yml --reset-once
ignite chain serve -c execution/chains/mars/mars.yml --reset-once
ignite chain serve -c execution/chains/venus/venus.yml --reset-once
ignite chain serve -c execution/chains/neptune/neptune.yml --reset-once
ignite chain serve -c execution/chains/jupiter/jupiter.yml --reset-once


bash execution/scenarios/relayerConfiguration1.sh

cat  ~/.ignite/relayer/config.yml