import { Stacked, Columns, Block } from 'unflexible-ui-legacy';
import { Viewer, SpecialZoomLevel } from '@react-pdf-viewer/core';
import { IconButton03 } from 'components/element';

import { view } from 'unflexible-ui-legacy';
import { RenderDownloadProps, getFilePlugin } from '@react-pdf-viewer/get-file';
import { color } from 'lib/config';

interface Props {
  url: string;
}

const Pdf = ({ url }: Props) => {
  const getFilePluginInstance = getFilePlugin();
  const { Download } = getFilePluginInstance;

  return (
    <>
      <Stacked paddingPos="none">
        <Viewer
          fileUrl={url}
          plugins={[getFilePluginInstance]}
          defaultScale={SpecialZoomLevel.PageWidth}
        />
      </Stacked>

      <Stacked paddingPos="top" paddingSize="narrow">
        <Download>
          {(props: RenderDownloadProps) => (
            <Columns justify="center">
              <Block width="400px" widthS="100%">
                <IconButton03
                  name="ダウンロード"
                  icon={view.url('images/icon_download.png')}
                  color={color.lightBlue}
                  kind="button"
                  onClick={props.onClick}
                  download
                />
              </Block>
            </Columns>
          )}
        </Download>
      </Stacked>
    </>
  );
};

export default Pdf;
