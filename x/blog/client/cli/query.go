package cli

import (
	"fmt"
	// "strings"

	"github.com/spf13/cobra"

	"github.com/cosmos/cosmos-sdk/client"
	// "github.com/cosmos/cosmos-sdk/client/flags"
	// sdk "github.com/cosmos/cosmos-sdk/types"

	"github.com/irclausen/planet/x/blog/types"
)

// GetQueryCmd returns the cli query commands for this module
func GetQueryCmd(queryRoute string) *cobra.Command {
	// Group blog queries under a subcommand
	cmd := &cobra.Command{
		Use:                        types.ModuleName,
		Short:                      fmt.Sprintf("Querying commands for the %s module", types.ModuleName),
		DisableFlagParsing:         true,
		SuggestionsMinimumDistance: 2,
		RunE:                       client.ValidateCmd,
	}

	cmd.AddCommand(CmdQueryParams())
	cmd.AddCommand(CmdListPost())
	cmd.AddCommand(CmdShowPost())
	cmd.AddCommand(CmdListSentPost())
	cmd.AddCommand(CmdShowSentPost())
	cmd.AddCommand(CmdListTimeoutPost())
	cmd.AddCommand(CmdShowTimeoutPost())
	// this line is used by starport scaffolding # 1

	return cmd
}
