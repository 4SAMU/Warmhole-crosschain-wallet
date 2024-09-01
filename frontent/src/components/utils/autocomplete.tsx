import * as React from "react";
import { Autocomplete, Box, TextField } from "@mui/material";

interface CryptoDataProps {
  label: string;
  minDeposit?: string;
}

export const CustomAutocompelete = ({
  data,
  label,
  styles,
  setSelectedAsset,
}: {
  data: CryptoDataProps[];
  label?: string;
  styles?: any;
  setSelectedAsset: any;
}) => {
  return (
    <Autocomplete
      id="select-assets"
      sx={{
        width: "100%",

        "label, svg": {
          color: "gray",
        },

        label: {
          fontSize: "14px",
        },

        "&.MuiAutocomplete-root": {
          padding: "0 !important",
          color: "gray !important",

          "& fieldset": {
            borderColor: "gray",
          },
          "&:hover fieldset": {
            borderColor: "gray",
          },
          "& .Mui-focused fieldset": {
            borderColor: "gray",
          },

          "& .MuiOutlinedInput-input": {
            padding: "0 !important",
          },
          ".MuiAutocomplete-input": {
            border: "none",
            height: "40px !important",
            margin: "0",
          },
        },
      }}
      options={data}
      autoHighlight={false}
      getOptionLabel={(option: any) => option.label}
      onChange={(event: any, value: any) => {
        // Correctly setting the selected asset when an option is selected
        setSelectedAsset(value ? value.label : "");
      }}
      renderOption={(props: any, option: any) => {
        const { key, ...optionProps } = props;
        // setSelectedAsset(option.label)

        return (
          <Box
            key={key}
            component="li"
            sx={{
              "& > img": { mr: 2, flexShrink: 0 },
              span: {
                color: "gray",
                fontSize: "12px",
                marginLeft: "30px",
              },
            }}
            {...optionProps}
          >
            {option.label}{" "}
            {option.minDeposit && (
              <span>minimun deposit is {option.minDeposit}</span>
            )}
          </Box>
        );
      }}
      renderInput={(params: any) => (
        <TextField {...params} label={label ? label : ""} />
      )}
    />
  );
};
