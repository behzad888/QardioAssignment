//@flow
import React, {
  type Element as ReactElement,
  memo,
  useRef,
  useEffect,
  useState,
  useCallback,
} from 'react';
import ImagesLoaded from '../images-loaded/images-loaded';

type MasonryPropType = {
  children: ReactElement<any>[],
};

function MasonryComponent(props: MasonryPropType) {
  const [containerSize, setContainerSize] = useState(null);
  const [nodes, setNodes] = useState([]);
  const [imagesLoaded, setImagesLoaded] = useState(true);

  //window resize listener side effect
  useEffect(() => {
    const containerSizeHandler = e => {
      let size = props.sizes
        .map(function(size) {
          return (
            size.minWidth &&
            window.matchMedia('(min-width: ' + size.minWidth + ')').matches
          );
        })
        .indexOf(true);

      if (size === -1) {
        size = props.sizes.length - 1;
      }
      setContainerSize(props.sizes[size]);
    };
    containerSizeHandler();
    window.addEventListener('resize', containerSizeHandler);

    return () => {
      window.removeEventListener('resize', containerSizeHandler);
    };
  }, []);

  useEffect(() => {}, []);

  //generate masonry items side effect
  useEffect(() => {
    if (nodes.length <= 0) {
      return;
    }
    const nodesWidths = nodes.map(element => element.clientWidth);
    const nodesHeights = nodes.map(element => element.clientHeight);
    const columnHeights = Array.apply(
      null,
      Array(containerSize.columnCount)
    ).map(() => 0);

    nodes.forEach((element, index) => {
      const columnTarget = columnHeights.indexOf(
        Math.min.apply(Math, columnHeights)
      );

      element.style.position = 'absolute';
      const nodeTop = `${columnHeights[columnTarget]}px`;
      const nodeLeft = `${columnTarget * nodesWidths[index] +
        columnTarget * containerSize.gap}px`;

      element.style.top = nodeTop;
      element.style.left = nodeLeft;
      //   element.style.transform = `translate3d(${nodeLeft}, ${nodeTop}, 0)`
      element.setAttribute('data-packed', '');

      const nodeWidth = nodesWidths[index];
      const nodeHeight = element.offsetHeight;

      if (nodeWidth && nodeHeight) {
        columnHeights[columnTarget] += nodeHeight + containerSize.gap;
      }
    });
  }, [nodes, containerSize]);

  //masonry container ref
  const masonryRefCallback = useCallback(
    e => {
      if (e === null) {
        return;
      }
      const children = [];
      for (let index = 0; index < e.children.length; index++) {
        const element = e.children[index];
        children.push(element);
      }
      setNodes(children);
    },
    // we should use imagesLoaded flag deps because of suspense data
    [imagesLoaded]
  );

  return (
    <ImagesLoaded onFinished={e => setImagesLoaded(!imagesLoaded)}>
      <div className="masonry-layout" ref={masonryRefCallback}>
        {props.children}
      </div>
    </ImagesLoaded>
  );
}

MasonryComponent.defaultProps = {
  sizes: [
    {minWidth: '1275px', columnCount: 6, gap: 10},
    {minWidth: '1083px', columnCount: 5, gap: 10},
    {minWidth: '870px', columnCount: 4, gap: 10},
    {minWidth: '665px', columnCount: 3, gap: 10},
    {columnCount: 2, gap: 10},
  ],
};

export default memo(MasonryComponent);
